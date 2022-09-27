# تزریق وابستگی ها 

Depedency Injection represent a powerful tool that injects dependencies into your application.

## Inject over HTTP request

There are two main concept that you've to learn: **Services** and **Modules**.

### Services

The first thing that we have to define is a Service. Services are components that *produce something*. The returned opject will be used by our service container to automatically resolve dependencies.

```go title="Example of 'Redis' service"
package service

import (
 "fmt"
 "github.com/shahind/go-jet/config"
 "github.com/go-redis/redis/v7"
 "github.com/labstack/gommon/log"
)

// ConnectRedis connect to Redis
func ConnectRedis() *redis.Client {
  conf := config.GetRedis()
  client := redis.NewClient(&redis.Options{
    Addr:     fmt.Sprintf("%s:%d", conf.Host, conf.Port),
    Password: conf.Password,
    DB:       1,
  })

  _, err := client.Ping().Result()

  if err != nil {
    log.Error(err)
  }

  return client
}
```

### Modules

Modules are components that may contain multiple Services and must be implemented in the Controller definition.

```go title="Example of Main module"
package module

import (
 "github.com/shahind/go-jet-framework/register"
 "github.com/shahind/go-jet/service"
)

var MainModule = register.DIModule{
 Name: "main",
 Provides: []interface{}{
  service.ConnectDB,
  service.ConnectRedis,
  service.ConnectElastic,
  service.ConnectMongo,
 },
}
```

This way we're saying that the dependencies declared in a specific controller has to be resolved within the attached modules.

```go title="Registering module in controllers"
package register

import (
 foundation "github.com/shahind/go-jet-framework"
 base_register "github.com/shahind/go-jet-framework/register"
 "github.com/shahind/go-jet/app/console"
 "github.com/shahind/go-jet/app/http/controller"
 "github.com/shahind/go-jet/database/model"
 "github.com/shahind/go-jet/module"
 "github.com/shahind/go-jet/router"
)

// BaseEntities returns a struct that contains Go-Jet base entities
func BaseEntities() foundation.BaseEntities {
 return foundation.BaseEntities{
  // ... other entities
  Controllers: base_register.ControllerRegister{
   base_register.ControllerRegisterItem{
    Controller: &controller.UserController{}, // Controller definitions
    Modules: []base_register.DIModule{
     module.MainModule,                       // Module definitions
    },
   },
   // other controllers ...
  },
  // other entities ...
 }
}
```

### Inject

Once you've defined your services you can use them in your application. You'll just need to define the type that is returned by one of our services as a parameter of:

* The `Run()` method present in a command
* In methods implemented in our controller.

```go title="DI inside a controller"
// Dependency injection in controller
package controller

import (
    "github.com/shahind/go-jet-framework" 
    "github.com/shahind/go-jet/database/model" 
    "github.com/jinzhu/gorm"
)

type SampleController struct{
    gwf.BaseController
}

// Main controller method
func (c *SampleController) Main(db *gorm.DB) {
    // Il parametro `db *gorm.DB` è iniettato 
    // all'interno del controller tramite il service container
    var user model.User
    if err := db.Find(&user).Error;err != nil {
        gwf.ProcessError(err)
    }
}
```

## Inject over CLI command

As with **HTTP Injection**, CLI commands can take advantage of the superpower of Dependency Injection.
Definition here is more simple. We've just to define our *Service* and register it in the `Service` field located in the `app/console/kernel.go` file.

```go title='Service register'
package console

import (
 "github.com/shahind/go-jet-framework/register"
 "github.com/shahind/go-jet/service"
)

var (
 // Commands is used to register all console commands.
 Commands = register.CommandRegister{}
 // Services will be used to create the Console Service Container.
 // This container is created to allow dependency injection through console commands.
 Services = register.ServiceRegister{
  service.ConnectDB,
  service.ConnectElastic,
  service.ConnectMongo,
  service.ConnectRedis,
  // ... here is where we've to register out services
 }
)
```

Similar to *Controllers* you can use *Services* in CLI command by declaring dependency ad parameter of the `Run()` method.

```go title="DI inside a command"
package console

type Batman struct {
    Signature   string
    Description string
    Args        string
}

// Command registration
func (c *Batman) Register() {
    c.Signature = "command:signature" 
    c.Description = "Execute database seeder"
}

// Command business logic
func (c *Batman) Run(db *gorm.DB) {
    // db *gorm.DB is injected 
    var user model.User
    if err := db.Find(&user).Error;err != nil {
        gwf.ProcessError(err)
    }
}
```
