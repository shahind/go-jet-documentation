"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[890],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,f=p["".concat(d,".").concat(u)]||p[u]||c[u]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="\u0645\u062f\u0644",l={unversionedId:"models",id:"models",title:"\u0645\u062f\u0644",description:"models}",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/models.md",sourceDirName:".",slug:"/models",permalink:"/go-jet-documentation/docs/models",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u06a9\u0646\u062a\u0631\u0644\u0631",permalink:"/go-jet-documentation/docs/controller"},next:{title:"\u0645\u0647\u0627\u062c\u0631\u062a",permalink:"/go-jet-documentation/docs/migration"}},d={},s=[{value:"Seeding",id:"-seeding",level:2}],m={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"models"},"\u0645\u062f\u0644"),(0,o.kt)("p",null,"In MVC frameworks models are responsible for the database interaction logic.\nGo-Jet takes advantage of the GORM library to provide them (see ",(0,o.kt)("a",{parentName:"p",href:"https://gorm.io/docs/models.html"},"GORM")," documentation for more information about models)."),(0,o.kt)("p",null,"You can create a new model by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$> ./alfred model:create [model name]\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Models generated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"model:create")," command are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"database/model")," folder.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Every model has to be registered in the foundation.BaseEntities structure located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"register/register.go."),"\nAlfred take care of this for you, but if you want to create a model manually you have to do it manually."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Registrazione di un nuovo modello"',title:'"Registrazione',di:!0,un:!0,nuovo:!0,'modello"':!0},"// Other BaseEntities structs...\n//\n// Models will handle all application models\n// Here is where you've to register your custom models\n// If you create a new model with Alfred it will be auto-registered\nModels: register.ModelRegister{\n  model.User{},\n  // Here is where you\u2019ve to register new models\n},\n"))),(0,o.kt)("h2",{id:"-seeding"},"Seeding"),(0,o.kt)("p",null,"You can populate your database with test data implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Seed")," method."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Go-Jet uses ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brianvoe/gofakeit"},"GoFakeIt library")," to generate fake data.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Seeding method of a model"',title:'"Seeding',method:!0,of:!0,a:!0,'model"':!0},"// Execute model seeding\nfunc (User) Seed(db *gorm.DB) {\n    for i := 0; i < 10; i++ {\n        password := gofakeit.Password(true, true, true, true, false, 32)\n        encryptedPassword, _ := bcrypt.GenerateFromPassword([]byte(password), 14)\n\n        user := User{\n            Name:     gofakeit.FirstName(),\n            Surname:  gofakeit.LastName(),\n            Username: gofakeit.Username(),\n            Password: string(encryptedPassword),\n        }\n\n        if err := db.Create(&user).Error; err != nil {\n            exception.ProcessError(err)\n        }\n    }\n}\n")),(0,o.kt)("p",null,"Seeder may be executed by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"./alfred database:seed [model name]"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Omitting the model name the command will run every model seeder's.")))}c.isMDXComponent=!0}}]);