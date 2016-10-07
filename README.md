# feathers-configuration-env

Load the feathers config folder configuration into environment variables.

It's like `dotenv` but instead of loading from a `.env` file it uses the feathers configuration files.

##  Why?

This allows us to use tools that depend on environment variables without duplicating our configs.

## How?

```shell
npm install feathers-configuration-env
feathers-configuration-env && echo \$host
```
