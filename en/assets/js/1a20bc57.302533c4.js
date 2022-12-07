"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,g=p["".concat(m,".").concat(u)]||p[u]||s[u]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},l="Commands",i={unversionedId:"cli",id:"cli",title:"Commands",description:"cli}",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/go-jet-documentation/en/docs/cli",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Migration",permalink:"/go-jet-documentation/en/docs/migration"},next:{title:"Dependency Injection",permalink:"/go-jet-documentation/en/docs/service_container"}},m={},c=[{value:"Create custom commands",id:"-create-custom-commands",level:2},{value:"Dependency injection",id:"-dependency-injection",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"Commands"),(0,r.kt)("p",null,"Alfred is the command-line interface included with Go-Jet. It provides a number of helpful commands that can assist you while you build your application. You can install Alfred by running ",(0,r.kt)("inlineCode",{parentName:"p"},"go install github.com/shahind/go-jet/cmd/alfred@latest")),(0,r.kt)("p",null,"Run the following command to see a list of available commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-> alfred show:commands\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Commands"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database:seed"),(0,r.kt)("td",{parentName:"tr",align:null},"Executes database seeder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model:create ","[model name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new database model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migration:create ","[migration name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new migration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migration:up"),(0,r.kt)("td",{parentName:"tr",align:null},"Executes migrations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migration:rollback ","[step]"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute migrations rollback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show:commands"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows help menu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controller:create ","[controller name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmd:create ","[command name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new CLI command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"middleware:create ","[middleware name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new middleware")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generate:key"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates new application key")))),(0,r.kt)("h2",{id:"-create-custom-commands"},"Create custom commands"),(0,r.kt)("p",null,"You can create a custom Alfred command by launching ",(0,r.kt)("inlineCode",{parentName:"p"},"alfred cmd:create <command name>"),".\nThis will create a new .go file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/console")," folder that contains some boilerplate code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-> alfred cmd:create batman\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="New custom command"',title:'"New',custom:!0,'command"':!0},'package console\n\ntype Batman struct {\n    Signature   string\n    Description string\n    Args        string\n}\n\n// Command registration\nfunc (c *Batman) Register() {\n    c.Signature = "command:signature"          // Change command signature\n    c.Description = "Execute database seeder"  // Change command desc\n}\n\n// Command business logic\nfunc (c *Batman) Run() {\n    // Insert command logic\n}\n')),(0,r.kt)("p",null,"As you can see in the figure 3 the commands contains two main methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register: used by the show:commands command to expose signature and description"),(0,r.kt)("li",{parentName:"ul"},"Run: contains the main logic of your custom command.")),(0,r.kt)("p",null,"The last thing that we need to do is register our custom command into the Go-Jet register.\nOpen the ",(0,r.kt)("inlineCode",{parentName:"p"},"app/console/kernel.go")," file and append a pointer to the new command in the CommandRegister struct:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Command register structure"',title:'"Command',register:!0,'structure"':!0},"/ Commands configuration represent all Go-Jet application conf\n// Every command needs to be registered in the following list\nvar (\n    Commands = register.CommandRegister{\n        // Here is where you've to register your custom commands\n    }\n)\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"In order to use the newly created command, Alfred have to be updated.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"alfred update")," command will update all registered commands.")),(0,r.kt)("h2",{id:"-dependency-injection"},"Dependency injection"),(0,r.kt)("p",null,"As for controller, Go-Jet allows to use services that are configured into the IoC container (Dependency Injection) to be injected into your commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Dependency Injection in CLI command"',title:'"Dependency',Injection:!0,in:!0,CLI:!0,'command"':!0},'type Seeder struct {\n register.Command\n}\n\nfunc (c *Seeder) Register() {\n c.Signature = "database:seed <name>"\n c.Description = "Execute database seeder"\n}\n\n// Todo: Improve this method to run a single seeder\nfunc (c *Seeder) Run(db *gorm.DB, models register.ModelRegister) {\n // Declare parameters of specific type to be injected\n}\n')))}s.isMDXComponent=!0}}]);