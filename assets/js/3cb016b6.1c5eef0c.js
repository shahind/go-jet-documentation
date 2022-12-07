"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[43],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc",l={unversionedId:"validation",id:"validation",title:"\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc",description:"validation}",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/validation.md",sourceDirName:".",slug:"/validation",permalink:"/go-jet-documentation/docs/validation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u0645\u06cc\u0627\u0646 \u0627\u0641\u0632\u0627\u0631",permalink:"/go-jet-documentation/docs/middleware"},next:{title:"\u06a9\u0646\u062a\u0631\u0644\u0631",permalink:"/go-jet-documentation/docs/controller"}},c={},s=[],u={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"validation"},"\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc"),(0,a.kt)("p",null,"Requests can be validated before begin handles. You can create a simple structure in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app/http/validation")," directory that should contain the content of a specific HTTP body request."),(0,a.kt)("p",null,"For instance if you need to validate a request that expects a json object with two specific fields you can create something like the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example of validation structure"',title:'"Example',of:!0,validation:!0,'structure"':!0},'type Credentials struct {\n  Username string `json:"username" valid:"required"`\n  Password string `json:"password" valid:"required"`\n}\n')),(0,a.kt)("p",null,"As you can see the above structure contains two fields: Username and Password. Each of these fields has two different tags."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"json")," tag is used to decode the raw json into a Golang struct. It used the standard ",(0,a.kt)("inlineCode",{parentName:"li"},"encoding/json")," format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"valid")," tag is responsible for the request validation. There are several configurations that may help you to validate the request. Check the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/asaskevich/govalidator"},"govalidator")," documentation for more information.")),(0,a.kt)("p",null,"The last thing that you have to do to enable specific validation over a specific controller is register it in the Validation field of an HTTP router like the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Validation in HTTPRouter intance"',title:'"Validation',in:!0,HTTPRouter:!0,'intance"':!0},'var AuthRouter = register.HTTPRouter{\n  Route: []register.Route{\n     {\n        Name:        "login",\n        Path:        "/login",\n        Action:      "AuthController@JWTAuthentication",\n        Method:      "POST",\n        Validation:  &validation.Credentials{},\n        Description: "Perform login",\n        Middleware:  []register.Middleware{},\n     },\n   },\n}\n')))}d.isMDXComponent=!0}}]);