"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,g=s["".concat(d,".").concat(u)]||s[u]||p[u]||o;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2086:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Comandi CLI",l={unversionedId:"cli",id:"cli",title:"Comandi CLI",description:"cli}",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/cli.md",sourceDirName:".",slug:"/cli",permalink:"/go-jet-documentation/it/docs/cli",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Migrazioni",permalink:"/go-jet-documentation/it/docs/migration"},next:{title:"Service container",permalink:"/go-jet-documentation/it/docs/service_container"}},d={},c=[{value:"Crea comandi personalizzati",id:"-create-custom-commands",level:2},{value:"Dependency injection",id:"-dependency-injection",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"Comandi CLI"),(0,r.kt)("p",null,"Alfred \xe8 la utility da linea di comando inclusa all'interno di Go-Jet. Mette a disposizione dello sviluppatore molti comandi utili per velocizzare lo sviluppo. .\nPuoi installare Alfred eseguendo il comando ",(0,r.kt)("inlineCode",{parentName:"p"},"go install github.com/shahind/cmd/alfred@latest")),(0,r.kt)("p",null,"Lancia il comando ",(0,r.kt)("inlineCode",{parentName:"p"},"alfred show:commands")," per visualizzare i comandi disponibili."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Comandi disponivili"),(0,r.kt)("th",{parentName:"tr",align:null},"Descrizione"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database:seed"),(0,r.kt)("td",{parentName:"tr",align:null},"Executes database seeder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model:create ","[model name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new database model")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migration:create ","[migration name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new migration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migration:up"),(0,r.kt)("td",{parentName:"tr",align:null},"Executes migrations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"migration:rollback ","[step]"),(0,r.kt)("td",{parentName:"tr",align:null},"Execute migrations rollback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show:commands"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows help menu")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"controller:create ","[controller name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cmd:create ","[command name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new CLI command")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"middleware:create ","[middleware name]"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates new middleware")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"generate:key"),(0,r.kt)("td",{parentName:"tr",align:null},"Generates new application key")))),(0,r.kt)("h2",{id:"-create-custom-commands"},"Crea comandi personalizzati"),(0,r.kt)("p",null,"Puoi creare un nuovo comando Alfred eseguendo ",(0,r.kt)("inlineCode",{parentName:"p"},"alfred cmd:create [command name]"),".\nIn questo modo verr\xe0 creato un nuovo file ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd/[command name].go")," all'interno del pacchetto ",(0,r.kt)("inlineCode",{parentName:"p"},"app/console")," contente il codice necessario per la creazione di un nuovo comando."),(0,r.kt)("p",null,"Lanciando il comando ",(0,r.kt)("inlineCode",{parentName:"p"},"alfred cmd:creare batman")," verr\xe0 creato un nuovo file ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd/batman.go")," all'interno del pacchetto ",(0,r.kt)("inlineCode",{parentName:"p"},"app/console"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Nuovo comando"',title:'"Nuovo','comando"':!0},'package console\n\ntype Batman struct {\n    Signature   string\n    Description string\n    Args        string\n}\n\n// Command registration\nfunc (c *Batman) Register() {\n    c.Signature = "command:signature"          // Change command signature\n    c.Description = "Execute database seeder"  // Change command desc\n}\n\n// Command business logic\nfunc (c *Batman) Run() {\n    // Insert command logic\n}\n')),(0,r.kt)("p",null,"Come puoi vedere all'interno della figura il comando contiene due metodi principali:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register: utilizzato da ",(0,r.kt)("inlineCode",{parentName:"li"},"alfred show:commands")," per visionare la descrizione del comando"),(0,r.kt)("li",{parentName:"ul"},"Run: contiene la business logic del comando")),(0,r.kt)("p",null,"L'ultima cosa che devi fare \xe8 registrare il comando all'interno della struttura ",(0,r.kt)("inlineCode",{parentName:"p"},"CommandRegister")," presente all'interno del pacchetto ",(0,r.kt)("inlineCode",{parentName:"p"},"app/console"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Struttura per la registrazione dei comandi CLI"',title:'"Struttura',per:!0,la:!0,registrazione:!0,dei:!0,comandi:!0,'CLI"':!0},"// Commands configuration represent all Go-Jet application conf\n// Every command needs to be registered in the following list\nvar (\n    Commands = register.CommandRegister{\n        // Here is where you've to register your custom commands\n    }\n)\n")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Per poter utilizzare il nuovo comando, Alfred deve essere aggiornato.\nEsegui ",(0,r.kt)("inlineCode",{parentName:"p"},"alfred update")," per aggiornare tutti i comandi presenti nell'applicazione")),(0,r.kt)("h2",{id:"-dependency-injection"},"Dependency injection"),(0,r.kt)("p",null,"Come per i controller, Go-Jet permette l'utilizzo di servizi presenti all'interno del container IoC. Dichiarando un servizio all'interno della variabile ",(0,r.kt)("inlineCode",{parentName:"p"},"Services")," presente nel file ",(0,r.kt)("inlineCode",{parentName:"p"},"console/kernel.go"),", questo servizio verr\xe0 iniettato all'interno del comando."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="DI all\'interno di un comando CLI"',title:'"DI',"all'interno":!0,di:!0,un:!0,comando:!0,'CLI"':!0},'type Seeder struct {\n register.Command\n}\n\nfunc (c *Seeder) Register() {\n c.Signature = "database:seed <name>"\n c.Description = "Execute database seeder"\n}\n\n// Todo: Improve this method to run a single seeder\nfunc (c *Seeder) Run(db *gorm.DB, models register.ModelRegister) {\n // Dichiarando i parametri con un tipo di dato presente all\'intenro del container IoC, questo servizio verr\xe0 iniettato all\'interno del comando\n}\n')))}p.isMDXComponent=!0}}]);