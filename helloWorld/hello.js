var events = require( 'events' ).EventEmitter;

var printConnection = function( connection ) {
  console.log( 'connection' );

  connection.on( 'data', function( data ) {
    console.log( data );
  });

  connection.on( 'end', function() {
    console.log( 'connection ended' );
  });
};

// Define a function to be returned on require
exports.world = function( server ) {
  server.on( 'connection', printConnection );
};
