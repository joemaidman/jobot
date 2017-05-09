var builder = require('botbuilder');

module.exports = function(connector){

  return new builder.UniversalBot(connector);

}
