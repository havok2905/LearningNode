var hello  = require( './hello' );
var http   = require('http');

// Create server to respond with hello
var server = http.createServer( function( request, response ) {
  response.writeHead( 200 );
  response.end( 'hello http' );
});

hello.world( server );

server.listen( 8080 );
