"use strict";(self.webpackChunkmaap_docs=self.webpackChunkmaap_docs||[]).push([[902],{7891:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var r=i(4848),o=i(8453);const l={sidebar_position:7},d="Fireworks AI",s={id:"partners/fireworks",title:"Fireworks AI",description:"Introduction",source:"@site/docs/partners/fireworks.md",sourceDirName:"partners",slug:"/partners/fireworks",permalink:"/maap-chatbot-builder/docs/partners/fireworks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Cohere",permalink:"/maap-chatbot-builder/docs/partners/cohere"},next:{title:"Nomic",permalink:"/maap-chatbot-builder/docs/partners/nomic"}},t={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Deploying your model",id:"deploying-your-model",level:2},{value:"Chat Model",id:"chat-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap",level:4},{value:"Config File :",id:"config-file-",level:4},{value:"Environment Variable :",id:"environment-variable-",level:4},{value:"Embedding Model",id:"embedding-model",level:3},{value:"Usage with MAAP",id:"usage-with-maap-1",level:4},{value:"Config File :",id:"config-file--1",level:4},{value:"Environment Variable :",id:"environment-variable--1",level:4},{value:"References",id:"references",level:3},{value:"Model Name",id:"model-name",level:5},{value:"API Key",id:"api-key",level:5}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fireworks-ai",children:"Fireworks AI"}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://fireworks.ai/",children:"Fireworks AI"})," offers a rapid, cost-effective, and adaptable solution for generative artificial intelligence, enabling product developers to execute, refine, and distribute LLMs efficiently."]}),"\n",(0,r.jsx)(n.h2,{id:"deploying-your-model",children:"Deploying your model"}),"\n",(0,r.jsx)(n.p,{children:"Fireworks offers the capability to deploy various Chat Models(LLM) under its umbrella."}),"\n",(0,r.jsx)(n.h3,{id:"chat-model",children:"Chat Model"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to their ",(0,r.jsx)(n.a,{href:"https://fireworks.ai/models",children:"documentation"})," to understand the latest offerings, with feature and cost comparisons."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-with-maap",children:"Usage with MAAP"}),"\n",(0,r.jsx)(n.p,{children:"To use Fireworks model with MAAP framework, you would need to feed below values."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"config-file-",children:"Config File :"}),"\n",(0,r.jsxs)(n.p,{children:["Provided below are the values required to be added in ",(0,r.jsx)(n.code,{children:"config.yaml"})," file in embedding section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"embedding:\n    class_name: Fireworks\n    model_name: <check_references_below>\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"environment-variable-",children:"Environment Variable :"}),"\n",(0,r.jsxs)(n.p,{children:["Below value(s) are to be added in ",(0,r.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FIREWORKS_API_KEY : <check_references_below>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"embedding-model",children:"Embedding Model"}),"\n",(0,r.jsxs)(n.p,{children:["You can follow the same steps as above to delploy the embedding model as well. The process is documented ",(0,r.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/create-resource",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"usage-with-maap-1",children:"Usage with MAAP"}),"\n",(0,r.jsx)(n.p,{children:"To use Azure OpenAI embedding with MAAP framework, you would need to feed below values."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"config-file--1",children:"Config File :"}),"\n",(0,r.jsxs)(n.p,{children:["Provided below are the values required to be added in ",(0,r.jsx)(n.code,{children:"config.yaml"})," file in embedding section."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"embedding:\n    class_name: Nomic-v1.5 or Nomic-v1\n    model_name: <check_references_below> \n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h4,{id:"environment-variable--1",children:"Environment Variable :"}),"\n",(0,r.jsx)(n.p,{children:"Below value(s) are to be added in .env file"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"FIREWORKS_API_KEY : <check_references_below>\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,r.jsx)(n.p,{children:"Provided below are the instructions on how to procure the right values for building your MAAP framework."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"model-name",children:"Model Name"}),"\n",(0,r.jsxs)(n.p,{children:["You can pick any model from the ",(0,r.jsx)(n.a,{href:"https://docs.Fireworks.com/docs/Fireworks-embed#english-models",children:"updated list"})," given in Fireworks documentation."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.h5,{id:"api-key",children:"API Key"}),"\n",(0,r.jsxs)(n.p,{children:["You will need to ",(0,r.jsx)(n.a,{href:"https://readme.fireworks.ai/docs/quickstart",children:"sign up"})," and retrieve a Fireworks API Key."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>s});var r=i(6540);const o={},l=r.createContext(o);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);