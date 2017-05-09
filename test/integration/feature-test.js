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
  });

  describe('/index', function(){

    it('it should greet the user', function(done){
      bot.send('/');
    });
  });
});
