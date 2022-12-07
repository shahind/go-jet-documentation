"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[304],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>c});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),l=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):d(d({},n),e)),a},m=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(a),c=r,g=p["".concat(u,".").concat(c)]||p[c]||s[c]||i;return a?t.createElement(g,d(d({ref:n},m),{},{components:a})):t.createElement(g,d({ref:n},m))}));function c(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=p;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var l=2;l<i;l++)d[l]=a[l];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4430:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const i={},d="Middleware",o={unversionedId:"middleware",id:"middleware",title:"Middleware",description:"Middleware menyediakan mekanisme mudah untuk memeriksa dan menyaring tiap ada request yang masuk ke aplikasimu. Mirip controller, sebuah middleware bisa dibuat dengan command:",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/middleware.md",sourceDirName:".",slug:"/middleware",permalink:"/id/docs/middleware",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Routing",permalink:"/id/docs/routing"},next:{title:"Validation",permalink:"/id/docs/validation"}},u={},l=[],m={toc:l};function s(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"middleware"},"Middleware"),(0,r.kt)("p",null,"Middleware menyediakan mekanisme mudah untuk memeriksa dan menyaring tiap ada request yang masuk ke aplikasimu. Mirip controller, sebuah middleware bisa dibuat dengan command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./alfred middleware:create\n")),(0,r.kt)("p",null,'Misalnya, middleware bernama "batman" bisa dibuat dengan menjalankan command:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./alfred middleware:create batman\n")),(0,r.kt)("p",null,"Setelah meng-eksekusi command tadi, sebuah middleware baru akan tersedia di folder ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/http/middleware")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Middleware batman baru',title:'"Middleware',batman:!0,baru:!0},'package middleware\n\nimport (\n    "net/http"\n)\n\ntype BatmanMiddleware struct {\n    Name        string\n    Description string\n}\n\n// Handle description\nfunc (BatmanMiddleware) Handle(next http.Handler) http.Handler {\n    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request){\n        // Do stuff here if you wanna execute something before handling\n          // the incoming request\n          next.ServeHTTP(w, r)\n          // Do something here if you wanna execute something after the request\n    })\n}\n\n// GetName returns the middleware name\nfunc (m BatmanMiddleware) GetName() string {\n  return m.Name\n}\n\n// GetDescription returns the middleware description\nfunc (m BatmanMiddleware) GetDescription() string {\n  return m.Description\n}\n\n\nfunc NewBatmanMiddleware() BatmanMiddleware{\n  return BatmanMiddleware{\n     Name:        "BasicAuth",\n     Description: "Provides basic authentication",\n  }\n}\n')),(0,r.kt)("p",null,"Seperti yang sudah disebutkan sebelumnya, middleware bisa digunakan untuk memproses sebelum/sesudah request dan menggunakan method ",(0,r.kt)("inlineCode",{parentName:"p"},"next.ServeHTTP")," untuk melanjutkan http request tadi ke controller. Kamu bisa melakukan apa-gitu sebelum atau/dan sesudah statement ini."),(0,r.kt)("p",null,"Seperti yang bisa kamu lihat dari contoh diatas, middleware berisi tiga method berbeda. Yang paling penting sendiri itu yang ",(0,r.kt)("inlineCode",{parentName:"p"},"Handle")," method yang berisi logic middlaware utamanya. Method yang kedua sama yang ketiga yaitu ",(0,r.kt)("inlineCode",{parentName:"p"},"GetName")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"GetDescription"),", mereka berdua ini digunakan di Go-Jet kernel untuk mengkategorikan tiap-tiap middleware dan tidak boleh di-edit."),(0,r.kt)("p",null,"Tiap middleware harus punya sebuah contructor function yang mengembalikan sebuah instance dari middleware sekarang. Kamu bisa menggunakan function ini untuk meng-enable suatu middleware pada suatu route atau group gitu, dengan menambahkannya ke Field Middleware sebuah HTTP router."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Middleware di HTTPRouter"',title:'"Middleware',di:!0,'HTTPRouter"':!0},'var AppRouter = register.HTTPRouter{\n  Route: []register.Route{\n     {\n        Name:        "home",\n        Path:        "/",\n        Action:      "HomeController@Main",\n        Method:      "GET",\n        Description: "Main route",\n        Middleware: []register.Middleware{\n           middleware.NewBatmanMiddleware(),\n        },\n     },\n  }\n}\n')))}s.isMDXComponent=!0}}]);