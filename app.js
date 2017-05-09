require('dotenv').config()
var connector = require('./app/models/connector.js');
var bot = require('./app/models/bot.js')(connector);
var server = require("./app/controllers/server.js")(connector)
var routes = require("./app/controllers/routes.js")(bot)
