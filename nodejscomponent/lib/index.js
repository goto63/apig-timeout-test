/**
 * Lib
 */

module.exports.respond = function(event, cb) {
  var response = {
    message: "Your Serverless function ran successfully!"
  };

  setTimeout(function() {
    return cb(null, response);
  }, event.delay);
};