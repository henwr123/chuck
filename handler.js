"use strict"

const Chuck = require('chucknorris-io'),
  client = new Chuck();

module.exports = (event, context) => {
  let err;


  client.getRandomJoke('dev').then(function (response) {
    const result2 = response.getValue();
    console.log(result2);
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
