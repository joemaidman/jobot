"strict mode";

describe("Server", function(){
  var server;
  var connector;
  var bot;
  var routes;
  require('dotenv').config()

  before(function(){
    connector = require('../../app/models/connector.js');
    bot = require('../../app/models/bot.js')(connector);
    server = require("../../app/controllers/server.js")(connector)
    routes = require("../../app/controllers/routes.js")(bot)
  });

  describe('/index', function(){

    it('asdasdas', function (done) {
      
        server.get('/', function (message) {
            assert.include(message.text.toLowerCase(), '');
            done();
        });
    });
  });
});
