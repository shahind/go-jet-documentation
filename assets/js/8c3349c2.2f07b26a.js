"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[728],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3831:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const l={},a="\u06a9\u0646\u062a\u0631\u0644\u0631",i={unversionedId:"controller",id:"controller",title:"\u06a9\u0646\u062a\u0631\u0644\u0631",description:"controller}",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/controller.md",sourceDirName:".",slug:"/controller",permalink:"/docs/controller",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u0627\u0639\u062a\u0628\u0627\u0631\u0633\u0646\u062c\u06cc",permalink:"/docs/validation"},next:{title:"\u0645\u062f\u0644",permalink:"/docs/models"}},s={},c=[{value:"Create a controller",id:"create-a-controller",level:2},{value:"Registering a controller",id:"registering-a-controller",level:2},{value:"Handle request",id:"-handle-request",level:2},{value:"Handle request body",id:"-handle-request-body",level:3},{value:"Handle response",id:"-handle-response",level:3},{value:"Dependency injection",id:"-dependency-injection",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controller"},"\u06a9\u0646\u062a\u0631\u0644\u0631"),(0,o.kt)("p",null,"Begin an MVC framework, Go-Jet uses controllers as request endpoints. Here developers can handle all the logic that has to be applied to the current request."),(0,o.kt)("h2",{id:"create-a-controller"},"Create a controller"),(0,o.kt)("p",null,"You can create a controller by running the following command in console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alfred controller:create sample\n")),(0,o.kt)("p",null,"Go-Jet will create a .go file containing a controller named \u201cSampleController\u201d in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/http/controller")," directory."),(0,o.kt)("p",null,"The content will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="New SampleController"',title:'"New','SampleController"':!0},'package controller\n\nimport "github.com/shahind/go-jet-framework"\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main(){\n    // Insert your custom logic\n}\n')),(0,o.kt)("p",null,"When creating a controller, Go-Jet automatically add to it the function ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()"),", which - as shown in following code- could be expanded with custom logic."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Controllers can be extended by adding new methods.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="SampleController with some logic"',title:'"SampleController',with:!0,some:!0,'logic"':!0},'// Sample controller\npackage controller\n\nimport (\n    "github.com/shahind/go-jet-framework"\n    "github.com/shahind/go-jet/exception"\n)\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main() {\n    _, err := c.Response.Write([]byte("Hello world")) if err != nil {\n        exception.ProcessError(err)\n    }\n}\n')),(0,o.kt)("p",null,"To gain access to everything underlying a Go-Jet controller, including HTTP request and response, a controller needs to extend ",(0,o.kt)("inlineCode",{parentName:"p"},"gwf.BaseController"),"."),(0,o.kt)("h2",{id:"registering-a-controller"},"Registering a controller"),(0,o.kt)("p",null,"Once created, controllers have to be registered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Register a controller"',title:'"Register',a:!0,'controller"':!0},"package register\n\n// BaseEntities returns a struct that contains Go-Jet base entities\nfunc BaseEntities() foundation.BaseEntities {\n    return foundation.BaseEntities{\n        // Controllers will handle all Go-Jet controller\n        // Here is where you've to register your custom controller\n        Controllers: base_register.ControllerRegister{\n            base_register.ControllerRegisterItem{\n                Controller: &controller.UserController{}, // Here is where you can define a Controller\n                Modules: []base_register.DIModule{\n                    // DI Modules\n                },\n            },\n        },\n    }\n}\n")),(0,o.kt)("p",null,"As you can see in the example above, Controller defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseEntities()")," method as a field of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerRegisterItem")," structure."),(0,o.kt)("h2",{id:"-handle-request"},"Handle request"),(0,o.kt)("p",null,"By extending ",(0,o.kt)("inlineCode",{parentName:"p"},"gwf.BaseController")," controllers have access to the incoming request within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," field. You can read the incoming request parameters, query strings, and body content by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"c.Request")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Access to the incoming request"',title:'"Access',to:!0,the:!0,incoming:!0,'request"':!0},"// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB) {\n    fmt.Println(c.Request.Method)\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Request")," field represent a pointer to the incoming ",(0,o.kt)("inlineCode",{parentName:"p"},"http.Request")," object")),(0,o.kt)("h3",{id:"-handle-request-body"},"Handle request body"),(0,o.kt)("p",null,"If you've validated the request within a validation structure you can access to request data simply including the\n",(0,o.kt)("inlineCode",{parentName:"p"},"kernel.Request")," value in method parameter.\nThis helps you to access to these values without explicitly decoding the incoming request."),(0,o.kt)("p",null,"Data are exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]interface{}")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Access to request in Controller"',title:'"Access',to:!0,request:!0,in:!0,'Controller"':!0},'// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB, req kernel.Request) {\n    fmt.Println(req["name"]) // You can access to the incoming request payload with the `req` object\n\n    var user model.User\n    if err := db.Find(&user).Error;err != nil {\n        gwf.ProcessError(err)\n    }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Because data in ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel.Request")," object is a ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]interface{}")," every value has to be cast with the original type."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example of type casting"',title:'"Example',of:!0,type:!0,'casting"':!0},'req["username"]          // This was originally a string\nreq["username"].(string) // But you\'ve explicitly cast to use it properly\n'))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can always manually decode the request body manually in order to use the original struct."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Decodifica manuale del contenuto della richiesta"',title:'"Decodifica',manuale:!0,del:!0,contenuto:!0,della:!0,'richiesta"':!0},'type Credentials struct {\n Username string `json:"username"`\n Password string `json:"password"`\n}\n\nvar credentials Credentials\nif err := tool.DecodeJsonRequest(c.Request, &data); err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(credentials.Username)\n'))),(0,o.kt)("h3",{id:"-handle-response"},"Handle response"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," the controller has the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," field that is used to handle the outgoing http response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Handle outgoing Response in controller"',title:'"Handle',outgoing:!0,Response:!0,in:!0,'controller"':!0},'// Main controller method\nfunc (c *SampleController) Main() {\n    _, err := c.Response.Write([]byte("Hello world")) if err != nil {\n        exception.ProcessError(err)\n    }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Response")," field represent a pointer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"http.ResponseWriter")," object")),(0,o.kt)("h2",{id:"-dependency-injection"},"Dependency injection"),(0,o.kt)("p",null,"Since contoller are execued inside a IoC container, every dependency (if properly configured) can be injected into the controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="SampleController with DependencyInjection"',title:'"SampleController',with:!0,'DependencyInjection"':!0},'// Dependency injection in controller\npackage controller\n\nimport (\n    "github.com/shahind/go-jet-framework"\n    "github.com/shahind/go-jet/database/model"\n    "github.com/jinzhu/gorm"\n)\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB) {\n    // *gorm.DB is a dependency that is injected into the controller\n    var user model.User\n    if err := db.Find(&user).Error;err != nil {\n        gwf.ProcessError(err)\n    }\n}\n')))}d.isMDXComponent=!0}}]);