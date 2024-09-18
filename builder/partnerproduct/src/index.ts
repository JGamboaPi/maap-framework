import 'dotenv/config';
import {
    getModelClass,
    getEmbeddingModel,
    getVBDConfigInfo,
    getAggregateOperatorConfigs,
    getSystemPrompt
} from '../../../src/yaml_parser/src/LoadYaml.js';
import {
    PreProcessQuery,
    RAGApplicationBuilder,
    Rerank,
    convertBaseEmbeddingsToEmbedder,
    convertBaseModelToChatLlm,
    withQueryPreprocessor,
    withReranker,
} from '../../../src/index.js';

import { MongoClient } from 'mongodb';
import {
    makeDefaultFindContent,
    MakeUserMessageFunc,
    OpenAiChatMessage,
    GenerateUserPromptFunc,
    makeRagGenerateUserPrompt,
    SystemPrompt,
    makeMongoDbConversationsService,
    AppConfig,
    makeApp,
} from 'mongodb-chatbot-server';
import { makeMongoDbEmbeddedContentStore, logger } from 'mongodb-rag-core';
import { MongoDBCrud } from '../../../src/db/mongodb-crud.js';
import { readFileSync } from 'fs';

// Load MAAP base classes
const model = getModelClass();
const embedding_model = getEmbeddingModel();
const { dbName, connectionString, vectorSearchIndexName, minScore, numCandidates } = getVBDConfigInfo();


// Load crud operator with query and name of the operator
const crudOperatorConfigs = getAggregateOperatorConfigs();
var structuredQueryContext = "";
if(crudOperatorConfigs) {    
    for(const crudConfig of crudOperatorConfigs) {
        const crud = new MongoDBCrud({connectionString:crudConfig.connectionString, dbName:crudConfig.dbName, collectionName: crudConfig.collectionName});
        crud.init();
        const aggQuery = JSON.parse(crudConfig.query);
        const result = await crud.aggregate(aggQuery);
        structuredQueryContext = structuredQueryContext +"/n"+ JSON.stringify(result);
    }
}

// MongoDB data source for the content used in RAG.
// Generated with the Ingest CLI.
const embeddedContentStore = makeMongoDbEmbeddedContentStore({
    connectionUri: connectionString,
    databaseName: dbName,
});

// Convert MAAP base embeddings to framework's Embedder
// console.log(embedding_model)
const embedder = convertBaseEmbeddingsToEmbedder(embedding_model);

// Convert MAAP base LLM to framework's ChatLlm
console.log(model);
const llm = await convertBaseModelToChatLlm(model);


// Find content in the embeddedContentStore using the vector embeddings
// generated by the embedder.
const findContent = makeDefaultFindContent({
    embedder,
    store: embeddedContentStore,
    findNearestNeighborsOptions: {
        k: 2,
        path: 'embedding',
        indexName: vectorSearchIndexName,
        numCandidates: numCandidates,
        minScore: minScore,
    },
});

// For MAAP team: this shows how to use the withReranker and withQueryPreprocessor
// functions to wrap the findContent function with reranking and preprocessing functionality.
const dummyRerank: Rerank = async ({ query, results }) => {
    return { results };
};
const dummyPreprocess: PreProcessQuery = async ({ query }) => {
    // Aggreation query result + User query
    return { preprocessedQuery: query };
};
const findContentWithRerank = withReranker({ findContentFunc: findContent, reranker: dummyRerank });
const findContentWithRerankAndPreprocess = withQueryPreprocessor({
    findContentFunc: findContentWithRerank,
    queryPreprocessor: dummyPreprocess,
});

// Constructs the user message sent to the LLM from the initial user message
// and the content found by the findContent function.
console.log("structuredQueryContext :: ",structuredQueryContext);
const makeUserMessage: MakeUserMessageFunc = async function ({
    content,
    originalUserMessage,
}): Promise<OpenAiChatMessage & { role: 'user' }> {
    const chunkSeparator = '~~~~~~';
    const context = content.map((c) => c.text).join(`\n${chunkSeparator}\n`);
    const contentForLlm = `Using the following information, answer the user query.
    the context is seperated by Chunk Separator: ${chunkSeparator}

Information:
${context}

Operational Information:
${structuredQueryContext}

User query: ${originalUserMessage}`;
    return { role: 'user', content: contentForLlm };
};

// Generates the user prompt for the chatbot using RAG
const generateUserPrompt: GenerateUserPromptFunc = makeRagGenerateUserPrompt({
    // findContent: findContentWithRerankAndPreprocess,
    findContent: findContent,
    makeUserMessage,
});

// System prompt for chatbot
const systemPrompt: SystemPrompt = {
    role: 'system',
    content: getSystemPrompt(),
};

// Create MongoDB collection and service for storing user conversations
// with the chatbot.

const mongodb = new MongoClient(connectionString);
const conversations = makeMongoDbConversationsService(mongodb.db(dbName));

// Create the MongoDB Chatbot Server Express.js app configuration
const config: AppConfig = {
    conversationsRouterConfig: {
        llm,
        conversations,
        generateUserPrompt,
        systemPrompt,
    },
    maxRequestTimeoutMs: 30000,
    serveStaticSite: true,
};

// Start the server and clean up resources on SIGINT.
const PORT = process.env.PORT || 9000;
const startServer = async () => {
    logger.info('Starting server...');
    const app = await makeApp(config);
    const server = app.listen(PORT, () => {
        logger.info(`Server listening on port: ${PORT}`);
    });

    process.on('SIGINT', async () => {
        logger.info('SIGINT signal received');
        await mongodb.close();
        await embeddedContentStore.close();
        await new Promise<void>((resolve, reject) => {
            server.close((error: any) => {
                error ? reject(error) : resolve();
            });
        });
        process.exit(1);
    });
};

try {
    startServer();
} catch (e) {
    logger.error(`Fatal error: ${e}`);
    process.exit(1);
}
