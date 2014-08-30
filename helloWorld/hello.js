
// Define a function to be returned on require
exports.world = function() {
  // Give us back an HTTP object to work with
  var http = require('http');

  // Create server to respond with hello
  var server = http.createServer( function( request, response ) {
    response.writeHead( 200 );
    response.end( 'hello http' );
  });

  // Tell the server to respond to port 8080
  server.listen( 8080 );
};
