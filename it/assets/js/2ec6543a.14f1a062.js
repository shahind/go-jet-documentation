"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={},o="Validazione",l={unversionedId:"validation",id:"validation",title:"Validazione",description:"Le richieste possono essere sottoposte a validazione prima che vengano prese in carico dal controller.",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/validation.md",sourceDirName:".",slug:"/validation",permalink:"/go-jet-documentation/it/docs/validation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Middleware",permalink:"/go-jet-documentation/it/docs/middleware"},next:{title:"Controller",permalink:"/go-jet-documentation/it/docs/controller"}},s={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validazione"},"Validazione"),(0,a.kt)("p",null,"Le richieste possono essere sottoposte a validazione prima che vengano prese in carico dal controller.\nPuoi creare una nuova validazione generando una nuova struttura contentente tutti i valori presenti nel corpo della richiesta, all'interno del pacchetto ",(0,a.kt)("inlineCode",{parentName:"p"},"app/http/validation"),"."),(0,a.kt)("p",null,"Per esempio, se necessiti di validare una richiesta contentene i valori necessari per effettuare il login, potresti creare una struttura simile alla segiente:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Esempio di una struttura di validazione"',title:'"Esempio',di:!0,una:!0,struttura:!0,'validazione"':!0},'type Credentials struct {\n  Username string `json:"username" valid:"required"`\n  Password string `json:"password" valid:"required"`\n}\n')),(0,a.kt)("p",null,"Come puoi vedere la struttura \xe8 composta da due campi, uno per il nome utente e uno per la password. Ogni campo possiede tue tag differenti:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json")," tag \xe8 usato per decodificare il JSON all'interno di una struttura Go. Per fare ci\xf2 viene utilizzato il formato standard definito all'interno di ",(0,a.kt)("inlineCode",{parentName:"li"},"encoding/json"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"valid")," tag \xe8 responsabile per la validazione dei valori presenti all'interno della richiesta. Ci sono molte opzioni di validazione disponibili, per ulteriori informazioni consulta la documentazione di ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/asaskevich/govalidator"},"govalidator"),".")),(0,a.kt)("p",null,"L'ultima cosa da sapere \xe8 che per poter essere eseguita, la validazione deve essere registta all'interno di una specifica rotta. Basta inserire il riferimento ad una istanza di questa struttura nel campo ",(0,a.kt)("inlineCode",{parentName:"p"},"Validation")," della rotta."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Validazione all\'iterno di una rotta"',title:'"Validazione',"all'iterno":!0,di:!0,una:!0,'rotta"':!0},'var AuthRouter = register.HTTPRouter{\n  Route: []register.Route{\n     {\n        Name:        "login",\n        Path:        "/login",\n        Action:      "AuthController@JWTAuthentication",\n        Method:      "POST",\n        Validation:  &validation.Credentials{}, // Validazione all\'interno della rotta\n        Description: "Perform login",\n        Middleware:  []register.Middleware{},\n     },\n   },\n}\n')))}d.isMDXComponent=!0}}]);