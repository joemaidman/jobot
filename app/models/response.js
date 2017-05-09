var data = require('../data/responses.json');
var preamble = require('../data/preambles.json');

function getRandomResponse(intent){
  var responses = [];

  for(var i = 0; i < data.length;i++){
    responses.push(data[i]);
  }
  var filteredResponses = responses.filter(function(item){
    return item.intent == intent;
  });

  return (preamble[Math.floor(Math.random()*preamble.length)] + " " + filteredResponses[Math.floor(Math.random()*filteredResponses.length)].body);
}

module.exports = getRandomResponse;
