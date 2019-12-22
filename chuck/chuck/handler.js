"use strict"

const Chuck = require('chucknorris-io'),
      client = new Chuck();

module.exports = (event, context) => {
    let err;
    const result =             {
        status: "You said: " + JSON.stringify(event.body)
    };

    client.getRandomJoke().then(function (response) {
      const result2 = response.getValue( );
      context
	   .status(200)
           .succeed(result2);
    }).catch(function (err) {
      context.fail(err.message);
    });

    ///context
    ///    .status(200)
    ///    .succeed(result);
}
