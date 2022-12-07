"use strict";(self.webpackChunkgo_jet_documentation=self.webpackChunkgo_jet_documentation||[]).push([[248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),p=o,g=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return t?r.createElement(g,a(a({ref:n},d),{},{components:t})):r.createElement(g,a({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={},a="\u062a\u0632\u0631\u06cc\u0642 \u0648\u0627\u0628\u0633\u062a\u06af\u06cc \u0647\u0627",s={unversionedId:"service_container",id:"service_container",title:"\u062a\u0632\u0631\u06cc\u0642 \u0648\u0627\u0628\u0633\u062a\u06af\u06cc \u0647\u0627",description:"Depedency Injection represent a powerful tool that injects dependencies into your application.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/service_container.md",sourceDirName:".",slug:"/service_container",permalink:"/docs/service_container",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Commands",permalink:"/docs/cli"}},c={},l=[{value:"Inject over HTTP request",id:"inject-over-http-request",level:2},{value:"Services",id:"services",level:3},{value:"Modules",id:"modules",level:3},{value:"Inject",id:"inject",level:3},{value:"Inject over CLI command",id:"inject-over-cli-command",level:2}],d={toc:l};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u062a\u0632\u0631\u06cc\u0642-\u0648\u0627\u0628\u0633\u062a\u06af\u06cc-\u0647\u0627"},"\u062a\u0632\u0631\u06cc\u0642 \u0648\u0627\u0628\u0633\u062a\u06af\u06cc \u0647\u0627"),(0,o.kt)("p",null,"Depedency Injection represent a powerful tool that injects dependencies into your application."),(0,o.kt)("h2",{id:"inject-over-http-request"},"Inject over HTTP request"),(0,o.kt)("p",null,"There are two main concept that you've to learn: ",(0,o.kt)("strong",{parentName:"p"},"Services")," and ",(0,o.kt)("strong",{parentName:"p"},"Modules"),"."),(0,o.kt)("h3",{id:"services"},"Services"),(0,o.kt)("p",null,"The first thing that we have to define is a Service. Services are components that ",(0,o.kt)("em",{parentName:"p"},"produce something"),". The returned opject will be used by our service container to automatically resolve dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"title=\"Example of 'Redis' service\"",title:'"Example',of:!0,"'Redis'":!0,'service"':!0},'package service\n\nimport (\n "fmt"\n "github.com/shahind/go-jet/config"\n "github.com/go-redis/redis/v7"\n "github.com/labstack/gommon/log"\n)\n\n// ConnectRedis connect to Redis\nfunc ConnectRedis() *redis.Client {\n  conf := config.GetRedis()\n  client := redis.NewClient(&redis.Options{\n    Addr:     fmt.Sprintf("%s:%d", conf.Host, conf.Port),\n    Password: conf.Password,\n    DB:       1,\n  })\n\n  _, err := client.Ping().Result()\n\n  if err != nil {\n    log.Error(err)\n  }\n\n  return client\n}\n')),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Modules are components that may contain multiple Services and must be implemented in the Controller definition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example of Main module"',title:'"Example',of:!0,Main:!0,'module"':!0},'package module\n\nimport (\n "github.com/shahind/go-jet-framework/register"\n "github.com/shahind/go-jet/service"\n)\n\nvar MainModule = register.DIModule{\n Name: "main",\n Provides: []interface{}{\n  service.ConnectDB,\n  service.ConnectRedis,\n  service.ConnectElastic,\n  service.ConnectMongo,\n },\n}\n')),(0,o.kt)("p",null,"This way we're saying that the dependencies declared in a specific controller has to be resolved within the attached modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Registering module in controllers"',title:'"Registering',module:!0,in:!0,'controllers"':!0},'package register\n\nimport (\n foundation "github.com/shahind/go-jet-framework"\n base_register "github.com/shahind/go-jet-framework/register"\n "github.com/shahind/go-jet/app/console"\n "github.com/shahind/go-jet/app/http/controller"\n "github.com/shahind/go-jet/database/model"\n "github.com/shahind/go-jet/module"\n "github.com/shahind/go-jet/router"\n)\n\n// BaseEntities returns a struct that contains Go-Jet base entities\nfunc BaseEntities() foundation.BaseEntities {\n return foundation.BaseEntities{\n  // ... other entities\n  Controllers: base_register.ControllerRegister{\n   base_register.ControllerRegisterItem{\n    Controller: &controller.UserController{}, // Controller definitions\n    Modules: []base_register.DIModule{\n     module.MainModule,                       // Module definitions\n    },\n   },\n   // other controllers ...\n  },\n  // other entities ...\n }\n}\n')),(0,o.kt)("h3",{id:"inject"},"Inject"),(0,o.kt)("p",null,"Once you've defined your services you can use them in your application. You'll just need to define the type that is returned by one of our services as a parameter of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Run()")," method present in a command"),(0,o.kt)("li",{parentName:"ul"},"In methods implemented in our controller.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="DI inside a controller"',title:'"DI',inside:!0,a:!0,'controller"':!0},'// Dependency injection in controller\npackage controller\n\nimport (\n    "github.com/shahind/go-jet-framework" \n    "github.com/shahind/go-jet/database/model" \n    "github.com/jinzhu/gorm"\n)\n\ntype SampleController struct{\n    gwf.BaseController\n}\n\n// Main controller method\nfunc (c *SampleController) Main(db *gorm.DB) {\n    // Il parametro `db *gorm.DB` \xe8 iniettato \n    // all\'interno del controller tramite il service container\n    var user model.User\n    if err := db.Find(&user).Error;err != nil {\n        gwf.ProcessError(err)\n    }\n}\n')),(0,o.kt)("h2",{id:"inject-over-cli-command"},"Inject over CLI command"),(0,o.kt)("p",null,"As with ",(0,o.kt)("strong",{parentName:"p"},"HTTP Injection"),", CLI commands can take advantage of the superpower of Dependency Injection.\nDefinition here is more simple. We've just to define our ",(0,o.kt)("em",{parentName:"p"},"Service")," and register it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," field located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"app/console/kernel.go")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:"title='Service register'",title:"'Service","register'":!0},'package console\n\nimport (\n "github.com/shahind/go-jet-framework/register"\n "github.com/shahind/go-jet/service"\n)\n\nvar (\n // Commands is used to register all console commands.\n Commands = register.CommandRegister{}\n // Services will be used to create the Console Service Container.\n // This container is created to allow dependency injection through console commands.\n Services = register.ServiceRegister{\n  service.ConnectDB,\n  service.ConnectElastic,\n  service.ConnectMongo,\n  service.ConnectRedis,\n  // ... here is where we\'ve to register out services\n }\n)\n')),(0,o.kt)("p",null,"Similar to ",(0,o.kt)("em",{parentName:"p"},"Controllers")," you can use ",(0,o.kt)("em",{parentName:"p"},"Services")," in CLI command by declaring dependency ad parameter of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="DI inside a command"',title:'"DI',inside:!0,a:!0,'command"':!0},'package console\n\ntype Batman struct {\n    Signature   string\n    Description string\n    Args        string\n}\n\n// Command registration\nfunc (c *Batman) Register() {\n    c.Signature = "command:signature" \n    c.Description = "Execute database seeder"\n}\n\n// Command business logic\nfunc (c *Batman) Run(db *gorm.DB) {\n    // db *gorm.DB is injected \n    var user model.User\n    if err := db.Find(&user).Error;err != nil {\n        gwf.ProcessError(err)\n    }\n}\n')))}m.isMDXComponent=!0}}]);