var builder = require('botbuilder');
var connector;

// if(process.env.ENV != "TEST"){
  connector = new builder.ChatConnector({appId: process.env.MICROSOFT_APP_ID, appPassword: process.env.MICROSOFT_APP_PASSWORD});
// }
// else{
//   connector = new builder.ConsoleConnector();
// }

module.exports = connector;
