"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[835],{7843:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var o=i(4848),l=i(8453);const t={sidebar_position:3},r="GCP",s={id:"partners/gcp",title:"GCP",description:"Introduction",source:"@site/docs/partners/gcp.md",sourceDirName:"partners",slug:"/partners/gcp",permalink:"/maap-chatbot-builder/docs/partners/gcp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Azure",permalink:"/maap-chatbot-builder/docs/partners/azure"},next:{title:"Anthropic",permalink:"/maap-chatbot-builder/docs/partners/anthropic"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Setting up VertexAI",id:"setting-up-vertexai",level:3},{value:"1. Setup GCP Project, gcloud CLI and Vertex AI",id:"1-setup-gcp-project-gcloud-cli-and-vertex-ai",level:4},{value:"2. (Optional) Create a new Service Account with least permissive role.",id:"2-optional-create-a-new-service-account-with-least-permissive-role",level:4},{value:"3. Authentication",id:"3-authentication",level:4},{value:"Deploying your Model",id:"deploying-your-model",level:2},{value:"LLM Model",id:"llm-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap",level:4},{value:"Config File :",id:"config-file-",level:4},{value:"Embedding Model",id:"embedding-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap-1",level:4},{value:"Config File :",id:"config-file--1",level:4},{value:"References",id:"references",level:3},{value:"Model Name",id:"model-name",level:5}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"gcp",children:"GCP"}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai?hl=en",children:"Vertex AI"})," is a comprehensive AI development platform powered by GCP. It is fully managed and unified, designed for creating and deploying generative AI solutions. It offers access to Vertex AI Studio, Agent Builder, and over 150 foundational models, including Gemini 1.5 Pro and Gemini 1.5 Flash, enabling seamless development and utilization of advanced AI capabilities."]}),"\n",(0,o.jsx)(n.h3,{id:"setting-up-vertexai",children:"Setting up VertexAI"}),"\n",(0,o.jsx)(n.h4,{id:"1-setup-gcp-project-gcloud-cli-and-vertex-ai",children:"1. Setup GCP Project, gcloud CLI and Vertex AI"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Instructions can be followed ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/start/cloud-environment",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"2-optional-create-a-new-service-account-with-least-permissive-role",children:["2. (Optional) ",(0,o.jsx)(n.a,{href:"https://console.cloud.google.com/iam-admin/serviceaccounts",children:"Create a new Service Account"})," with least permissive role."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["You can use role ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/general/access-control#aiplatform.user",children:"Vertex AI User"})," ",(0,o.jsx)(n.code,{children:"roles/aiplatform.user"}),"."]})}),"\n",(0,o.jsx)(n.h4,{id:"3-authentication",children:"3. Authentication"}),"\n",(0,o.jsxs)(n.p,{children:["Documentation: ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/authentication",children:"VertexAI Authentication"})]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"gcloud CLI"})," Application default login.  (",(0,o.jsx)(n.strong,{children:"Prefered for local development."}),")"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Refer ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/application-default-credentials#personal",children:"here"})," for documentation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You should be logged in an account, which has permissions for the project."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gcloud auth application-default login\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"On Google Cloud Platform"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Using a service account which has permissions to the project and VertexAI"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Refer ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/docs/authentication#on-gcp",children:"here"})," for documentation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Environment variable with path to JSON key for Service Account"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Refer ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/docs/authentication/application-default-credentials#GAC",children:"here"})," for documentation."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Download the Service Account's key after you have created it in Step 2."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Setup ",(0,o.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," .env variable with the path to the downloaded JSON credentials:"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"GOOGLE_APPLICATION_CREDENTIALS=/path/to/credentials.json\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["NOTE: Using service account with JSON key can impose security risk if not stored correctly. Make sure you are following the ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys",children:"best practices"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploying-your-model",children:"Deploying your Model"}),"\n",(0,o.jsx)(n.p,{children:"VertexAI, offers the capability to deploy both Chat Models(LLM) as well as Embedding Models from the console."}),"\n",(0,o.jsx)(n.h3,{id:"llm-model",children:"LLM Model"}),"\n",(0,o.jsxs)(n.p,{children:["Go through the VertexAI ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models",children:"documentation"})," and start deploying your model. You can test out the model in VertexAI > Chat Playground."]}),"\n",(0,o.jsx)(n.p,{children:"Once your model is deployed successfully, you can use it to serve the LLM purpose in the MAAP framework."}),"\n",(0,o.jsx)(n.h4,{id:"usage-with-maap",children:"Usage with MAAP"}),"\n",(0,o.jsx)(n.p,{children:"To use VertexAI model with MAAP framework, you would need to feed below values."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.h4,{id:"config-file-",children:"Config File :"}),"\n","Provided below are the values required to be added in ",(0,o.jsx)(n.code,{children:"config.yaml"})," file in LLM section.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"llms:\n    class_name: VertexAI\n    model_name: <check_references_below>\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"embedding-model",children:"Embedding Model"}),"\n",(0,o.jsxs)(n.p,{children:["VertexAI uses gecko embedding for creating embeddings, the list of supported models can be found ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text-embeddings-api#model_versions",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"usage-with-maap-1",children:"Usage with MAAP"}),"\n",(0,o.jsx)(n.p,{children:"To use VetexAI embedding with MAAP framework, you would need to feed below values."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.h4,{id:"config-file--1",children:"Config File :"}),"\n","Provided below are the values required to be added in ",(0,o.jsx)(n.code,{children:"config.yaml"})," file in embedding section.","\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"embedding:\n    class_name = VertexAI\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,o.jsx)(n.p,{children:"Provided below are the instructions on how to procure the right values for building your MAAP framework."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.h5,{id:"model-name",children:"Model Name"}),"\n","A list of models that Vertex AI facilitates can be found ",(0,o.jsx)(n.a,{href:"https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models",children:"here"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var o=i(6540);const l={},t=o.createContext(l);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);