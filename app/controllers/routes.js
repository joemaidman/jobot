module.exports = function(bot){

  bot.dialog('/', function (session) {
      session.send("Hello!");
  });

}
