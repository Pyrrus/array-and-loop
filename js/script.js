// Back end

// set the global var to help with 
// the timeing of the css animation.
var time = 0;

// add form validation to test the it 
// have number or not
var validation = function(number) {
  var pattern = /^\d+$/;
  return pattern.test(number);
}

// add the classes for the ball 
// go to right
var ballRight = function () {
  // set time out to give the ball 
  // time to go to the other side of
  // the screen
   setTimeout(function() { 
    $("#ball").removeClass("leftM")
    $("#ball").addClass("rightM")
  }, time += 3000);

   // remove the right class and 
   // add left class
   setTimeout(function (argument) {
     $("#ball").removeClass("right");
     $("#ball").addClass("left");
   }, time += 3000);
}

// add the classes for the ball 
// go to left
var ballLeft = function () {
    // set time out to give the ball 
    // time to go to the other side of
    // the screen
   setTimeout(function() { 
    $("#ball").removeClass("rightM")
    $("#ball").addClass("leftM")
  }, time += 3000);

   // remove the left class and 
   // add right class
   setTimeout(function (argument) {
     $("#ball").removeClass("left");
     $("#ball").addClass("right")
   }, time += 3000);
}

// set the word for ping and pong 
// reset the ball and time.
var pingPong = function(number) {
  var holder = [];

  // reset the ball
  $("#ball").removeClass("left");
  $("#ball").removeClass("leftM");
  $("#ball").removeClass("rightM");
  $("#ball").addClass("right");
  time = 0;
  // end ball

  // set the ping and pong to the array
  for (var i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      holder.push("pingpong");
    } else if (i % 3 === 0) {
      holder.push("ping");
      ballRight();
    } else if (i % 5 === 0) {
      holder.push("pong");
      ballLeft();
    } else {
      holder.push(i);
    }
  }

  return holder;
}

// This display the information 
// for the array
var display = function(data) {
  $(".remove").remove();
  for (var i = 0; i < data.length; i++) {
    $("#output").append("<li class='remove'>" + data[i] + "</li>");
  }
}

// Jquery ready
$(document).ready(function() {

  // user input
  $("button").click(function(event) {
    var number = $("#num");
    var data = [];
    if (validation(number.val())) {
      $("#num").removeClass("has-error");
      data = pingPong(number.val());
      display(data);
    } else {
      number.addClass("has-error");
    }
    event.preventDefault();
  });

});