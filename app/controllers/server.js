module.exports = function(connector){
  var restify = require('restify');
  var server = restify.createServer();

  server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
  });

  server.post('/api/messages', connector.listen());
  
  return server;
}
