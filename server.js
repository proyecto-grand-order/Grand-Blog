var ghost = require("ghost");
var express = require("express");
var urlService = require("./node_modules/ghost/core/frontend/services/url");
var parentApp = express();

ghost()
  .then(async function(ghostServer) {
    parentApp.use(urlService.utils.getSubdir(), ghostServer.rootApp);
    ghostServer.start(parentApp, process.env.PORT);
  })
  .catch(error => {
    console.error(`Ghost server error: ${error.message} ${error.stack}`);
    process.exit(1);
  });
