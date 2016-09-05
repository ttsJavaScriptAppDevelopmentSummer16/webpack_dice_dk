var $ = require('jquery');
var _ = require('lodash');

var dieRoll = [1, 2, 3, 4, 5, 6];

module.exports = $('#button').on('click', function() {
  // var result = Math.floor((Math.random() * 6) + 1);
  $('#greeting').children().remove();
  var result = _.shuffle(dieRoll).pop();
  console.log(result)
  $('#greeting').append("<p>You rolled a " + result + "!   Click to roll again!</p>");
});
