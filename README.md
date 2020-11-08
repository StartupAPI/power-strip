## Power Strip

Project goals is to create a set of components for user management which is just a drop-in into any React-based project and just a drop-in powerstrip JS file for other projects.

This requires [Startup API project](https://github.com/StartupAPI/users) installed on the server and uses the API provided by it.

# Development

To run a sample HTML page, just run

```
npm start
```

To proxy Startup API calls to another server during development, copy `/config-sample/default.json` to `/config/default.json` and set a value of `startupapiDevProxy` property to a URL of the Startup API root.
