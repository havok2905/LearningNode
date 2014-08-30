// Give us back an HTTP object to work with
var http = require('http');

//
var server = http.createServer( function( request, response ) {
  response.writeHead( 200 );
  response.end( 'hello http' );
});

server.listen( 8080 );
