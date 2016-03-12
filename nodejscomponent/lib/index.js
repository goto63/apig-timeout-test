/**
 * Lib
 */

module.exports.respond = function(event, cb) {
  console.log("event : " + JSON.stringify(event));

  var response = {
    message: "Your Serverless function ran successfully!"
  };

  setTimeout(function() {
    return cb(null, response);
  }, event.time);
};