import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import md5 from "md5";
import { strict as assert } from "assert";
import { BaseLoader } from "../interfaces/base-loader.js";
import { cleanString } from "../util/strings.js";

export class DocxLoader extends BaseLoader<{ type: "DocxLoader" }> {
  private readonly pathOrUrl: string;
  private readonly isUrl: boolean;

  constructor({}: { url: string; chunkSize?: number; chunkOverlap?: number });
  constructor({}: {
    filePath: string;
    chunkSize?: number;
    chunkOverlap?: number;
  });
  constructor({
    filePath,
    url,
    chunkSize,
    chunkOverlap,
  }: {
    filePath?: string;
    url?: string;
    chunkSize?: number;
    chunkOverlap?: number;
  }) {
    super(
      `DocxLoader_${md5(filePath ? `FILE_${filePath}` : `URL_${url}`)}`,
      chunkSize ?? 1000,
      chunkOverlap ?? 0,
    );

    this.isUrl = filePath ? false : true;
    assert(
      typeof filePath === "string" || typeof url === "string",
      "Either filePath or url must be provided",
    );
    // @ts-ignore ignoring b/c above line guarantees one of these is a string
    this.pathOrUrl = filePath ?? url;
  }

  override async *getUnfilteredChunks() {
    const chunker = new RecursiveCharacterTextSplitter({
      chunkSize: this.chunkSize,
      chunkOverlap: this.chunkOverlap,
    });
    const { getTextExtractor } = await import("office-text-extractor");
    const extractor = getTextExtractor();
    const docxParsed = await extractor.extractText({
      input: this.pathOrUrl,
      type: this.isUrl ? "url" : "file",
    });

    const chunks = await chunker.splitText(cleanString(docxParsed));
    for (const chunk of chunks) {
      yield {
        pageContent: chunk,
        metadata: {
          type: <"DocxLoader">"DocxLoader",
          source: this.pathOrUrl,
        },
      };
    }
  }
}
