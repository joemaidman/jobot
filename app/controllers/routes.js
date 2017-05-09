module.exports = function(bot){
  var builder = require('botbuilder');
  var intents = new builder.IntentDialog();
  var randomResponses = require("../models/response.js")

  bot.dialog('/', [
    function (session) {
      session.beginDialog('/name');
    },
    function (session, results) {
      session.send('Hello %s, nice to meet you! Ask me about my motivations for becoming a software developer, career, experience, ideal role, hobbies or strengths!', results.response);
      session.beginDialog('/main');
    }
  ]);

  bot.dialog('/name', [
    function (session) {
      var logo = new builder.Message(session)
      .attachments([{
        contentType: "image/jpg",
        contentUrl: "http://www.joemaidman.com/wp-content/uploads/2015/08/HeadD.jpg"
      }]);
      session.send(logo);
      builder.Prompts.text(session, "Hi! I'm Jobot What is your name?");
    },
    function (session, results) {
      session.endDialogWithResult(results);
    }
  ]);

  bot.dialog('/main', new builder.IntentDialog()
    .matches(/^motivation|motivate|motivates|motivated|driven|drives/i, '/motivation')
    .matches(/^experience|past|career|life|previous|xp/i, '/experience')
    .matches(/^hobbies|interests|passion|passions|interest|hobby/i, '/hobbies')
    .matches(/^strengths|strength|abilities/i, '/strengths')
    .matches(/^ideal|role/i, '/ideal')
    .onDefault(builder.DialogAction.send("I'm sorry but I didn't understand - I'm still learning!"))
);

  bot.dialog('/motivation', function (session) {
    session.send(randomResponses('motivation'));
    session.beginDialog('/main');
  });

  bot.dialog('/experience', function (session) {
    session.send(randomResponses('experience'));
    session.beginDialog('/main');
  });

  bot.dialog('/hobbies', function (session) {
    session.send(randomResponses('hobbies'));
    session.beginDialog('/main');
  });

  bot.dialog('/strengths', function (session) {
    session.send(randomResponses('strengths'));
    session.beginDialog('/main');
  });

  bot.dialog('/ideal', function (session) {
    session.send(randomResponses('idealrole'));
    session.beginDialog('/main');
  });

}
