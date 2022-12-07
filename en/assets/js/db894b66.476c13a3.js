"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const l={},a="Controller",i={unversionedId:"controller",id:"controller",title:"Controller",description:"controller}",source:"@site/docs/controller.md",sourceDirName:".",slug:"/controller",permalink:"/go-jet-documentation/en/docs/controller",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Validation",permalink:"/go-jet-documentation/en/docs/validation"},next:{title:"Models",permalink:"/go-jet-documentation/en/docs/models"}},s={},c=[{value:"Create a controller",id:"create-a-controller",level:2},{value:"Registering a controller",id:"registering-a-controller",level:2},{value:"Handle request",id:"-handle-request",level:2},{value:"Handle request body",id:"-handle-request-body",level:3},{value:"Handle response",id:"-handle-response",level:3},{value:"Dependency injection",id:"-dependency-injection",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"controller"},"Controller"),(0,o.kt)("p",null,"Begin an MVC framework, Go-Jet uses controllers as request endpoints. Here developers can handle all the logic that has to be applied to the current request."),(0,o.kt)("h2",{id:"create-a-controller"},"Create a controller"),(0,o.kt)("p",null,"You can create a controller by running the following command in console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"alfred controller:create sample\n")),(0,o.kt)("p",null,"Go-Jet will create a .go file containing a controller named \u201cSampleController\u201d in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/app/http/controller")," directory."),(0,o.kt)("p",null,"The content will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="New SampleController"',title:'"New','SampleController"':!0},'package controller\n\nimport "github.com/shahind/go-jet-framework"\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main(){\n    // Insert your custom logic\n}\n')),(0,o.kt)("p",null,"When creating a controller, Go-Jet automatically add to it the function ",(0,o.kt)("inlineCode",{parentName:"p"},"Main()"),", which - as shown in following code- could be expanded with custom logic."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Controllers can be extended by adding new methods.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="SampleController with some logic"',title:'"SampleController',with:!0,some:!0,'logic"':!0},'// Sample controller\npackage controller\n\nimport (\n    "github.com/shahind/go-jet-framework"\n    "github.com/shahind/go-jet/exception"\n)\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main() {\n    _, err := c.Response.Write([]byte("Hello world")) if err != nil {\n        exception.ProcessError(err)\n    }\n}\n')),(0,o.kt)("p",null,"To gain access to everything underlying a Go-Jet controller, including HTTP request and response, a controller needs to extend ",(0,o.kt)("inlineCode",{parentName:"p"},"gwf.BaseController"),"."),(0,o.kt)("h2",{id:"registering-a-controller"},"Registering a controller"),(0,o.kt)("p",null,"Once created, controllers have to be registered in the ",(0,o.kt)("inlineCode",{parentName:"p"},"register")," package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Register a controller"',title:'"Register',a:!0,'controller"':!0},"package register\n\n// BaseEntities returns a struct that contains Go-Jet base entities\nfunc BaseEntities() foundation.BaseEntities {\n    return foundation.BaseEntities{\n        // Controllers will handle all Go-Jet controller\n        // Here is where you've to register your custom controller\n        Controllers: base_register.ControllerRegister{\n            base_register.ControllerRegisterItem{\n                Controller: &controller.UserController{}, // Here is where you can define a Controller\n                Modules: []base_register.DIModule{\n                    // DI Modules\n                },\n            },\n        },\n    }\n}\n")),(0,o.kt)("p",null,"As you can see in the example above, Controller defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseEntities()")," method as a field of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ControllerRegisterItem")," structure."),(0,o.kt)("h2",{id:"-handle-request"},"Handle request"),(0,o.kt)("p",null,"By extending ",(0,o.kt)("inlineCode",{parentName:"p"},"gwf.BaseController")," controllers have access to the incoming request within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," field. You can read the incoming request parameters, query strings, and body content by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"c.Request")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Access to the incoming request"',title:'"Access',to:!0,the:!0,incoming:!0,'request"':!0},"// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB) {\n    fmt.Println(c.Request.Method)\n}\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Request")," field represent a pointer to the incoming ",(0,o.kt)("inlineCode",{parentName:"p"},"http.Request")," object")),(0,o.kt)("h3",{id:"-handle-request-body"},"Handle request body"),(0,o.kt)("p",null,"If you've validated the request within a validation structure you can access to request data simply including the\n",(0,o.kt)("inlineCode",{parentName:"p"},"kernel.Request")," value in method parameter.\nThis helps you to access to these values without explicitly decoding the incoming request."),(0,o.kt)("p",null,"Data are exposed as ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]interface{}")," type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Access to request in Controller"',title:'"Access',to:!0,request:!0,in:!0,'Controller"':!0},'// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB, req kernel.Request) {\n    fmt.Println(req["name"]) // You can access to the incoming request payload with the `req` object\n\n    var user model.User\n    if err := db.Find(&user).Error;err != nil {\n        gwf.ProcessError(err)\n    }\n}\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Because data in ",(0,o.kt)("inlineCode",{parentName:"p"},"kernel.Request")," object is a ",(0,o.kt)("inlineCode",{parentName:"p"},"map[string]interface{}")," every value has to be cast with the original type."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example of type casting"',title:'"Example',of:!0,type:!0,'casting"':!0},'req["username"]          // This was originally a string\nreq["username"].(string) // But you\'ve explicitly cast to use it properly\n'))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You can always manually decode the request body manually in order to use the original struct."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Decodifica manuale del contenuto della richiesta"',title:'"Decodifica',manuale:!0,del:!0,contenuto:!0,della:!0,'richiesta"':!0},'type Credentials struct {\n Username string `json:"username"`\n Password string `json:"password"`\n}\n\nvar credentials Credentials\nif err := tool.DecodeJsonRequest(c.Request, &data); err != nil {\n  log.Fatal(err)\n}\n\nfmt.Println(credentials.Username)\n'))),(0,o.kt)("h3",{id:"-handle-response"},"Handle response"),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"Request")," the controller has the ",(0,o.kt)("inlineCode",{parentName:"p"},"Response")," field that is used to handle the outgoing http response."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Handle outgoing Response in controller"',title:'"Handle',outgoing:!0,Response:!0,in:!0,'controller"':!0},'// Main controller method\nfunc (c *SampleController) Main() {\n    _, err := c.Response.Write([]byte("Hello world")) if err != nil {\n        exception.ProcessError(err)\n    }\n}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Response")," field represent a pointer to the ",(0,o.kt)("inlineCode",{parentName:"p"},"http.ResponseWriter")," object")),(0,o.kt)("h2",{id:"-dependency-injection"},"Dependency injection"),(0,o.kt)("p",null,"Since contoller are execued inside a IoC container, every dependency (if properly configured) can be injected into the controller."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="SampleController with DependencyInjection"',title:'"SampleController',with:!0,'DependencyInjection"':!0},'// Dependency injection in controller\npackage controller\n\nimport (\n    "github.com/shahind/go-jet-framework"\n    "github.com/shahind/go-jet/database/model"\n    "github.com/jinzhu/gorm"\n)\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB) {\n    // *gorm.DB is a dependency that is injected into the controller\n    var user model.User\n    if err := db.Find(&user).Error;err != nil {\n        gwf.ProcessError(err)\n    }\n}\n')))}d.isMDXComponent=!0}}]);