# Commands {#cli}

Alfred is the command-line interface included with Go-Jet. It provides a number of helpful commands that can assist you while you build your application. You can install Alfred by running `go install github.com/shahind/go-jet/cmd/alfred@latest`

Run the following command to see a list of available commands:

```bash
-> alfred show:commands
```

| Commands                  | Description                            |
| ------------------------- | -------------------------------------- |
| database:seed             | Executes database seeder               |
| model:create [model name] | Creates new database model             |
| migration:create [migration name] | Creates new migration |
| migration:up | Executes migrations |
| migration:rollback [step] | Execute migrations rollback |
| show:commands | Shows help menu |
| controller:create [controller name] | Creates new controller |
| cmd:create [command name] | Creates new CLI command |
| middleware:create [middleware name] | Creates new middleware |
| generate:key | Generates new application key |

## Create custom commands {#-create-custom-commands}

You can create a custom Alfred command by launching `alfred cmd:create <command name>`.
This will create a new .go file in the `app/console` folder that contains some boilerplate code.

```bash
-> alfred cmd:create batman
```

```go title="New custom command"
package console

type Batman struct {
    Signature   string
    Description string
    Args        string
}

// Command registration
func (c *Batman) Register() {
    c.Signature = "command:signature"          // Change command signature
    c.Description = "Execute database seeder"  // Change command desc
}

// Command business logic
func (c *Batman) Run() {
    // Insert command logic
}
```

As you can see in the figure 3 the commands contains two main methods:

* Register: used by the show:commands command to expose signature and description
* Run: contains the main logic of your custom command.

The last thing that we need to do is register our custom command into the Go-Jet register.
Open the `app/console/kernel.go` file and append a pointer to the new command in the CommandRegister struct:

```go title="Command register structure"
/ Commands configuration represent all Go-Jet application conf
// Every command needs to be registered in the following list
var (
    Commands = register.CommandRegister{
        // Here is where you've to register your custom commands
    }
)
```

:::warning
In order to use the newly created command, Alfred have to be updated.
The `alfred update` command will update all registered commands.
:::

## Dependency injection {#-dependency-injection}

As for controller, Go-Jet allows to use services that are configured into the IoC container (Dependency Injection) to be injected into your commands.

```go title="Dependency Injection in CLI command"
type Seeder struct {
 register.Command
}

func (c *Seeder) Register() {
 c.Signature = "database:seed <name>"
 c.Description = "Execute database seeder"
}

// Todo: Improve this method to run a single seeder
func (c *Seeder) Run(db *gorm.DB, models register.ModelRegister) {
 // Declare parameters of specific type to be injected
}
