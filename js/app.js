$(document).ready(function() {
    
    $('#toggleGrid').click(function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).text('Show grid lines');
            $("img").removeClass("border1");
        } else {
            $(this).addClass('active');
            $(this).text('Hide grid lines');
            $("img").addClass("border1");
        }
    });
        
        /**
 * Returns a random integer between min and max values (inclusive)
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a uniquely generated random integer array, so we can use this as our order.
 */
function getRandomSequence(limit) {
  var arr = [];
  while (arr.length < limit) {
    var randomnumber = getRandomInt(0, limit - 1);
    var found = false;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == randomnumber) {
        found = true;
        break;
      }
    }
    if (!found) arr[arr.length] = randomnumber;
  }
  return arr;
}

/**
 * Shows randomly ordered columns in a container.
 */
function orderColumnsRandomly() {
  // Get the children of the container
  var columns = $("#xcontainer").children();

  // Empty the container.
  $("#xcontainer").html('');

  // Get a random sequence to show the columns
  var sequence = getRandomSequence(columns.length);

  // Loop through the column array with the given sequence and fill the container.
  for (var i = 0; i < sequence.length; i++) {
    $("#xcontainer").append($(columns[sequence[i]]));
  }
}

// Bind the button's click event.
$("#shuffle").click(orderColumnsRandomly);


});