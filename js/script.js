var time = 0;

var validation = function(number) {
  var pattern = /^\d+$/;
  return pattern.test(number);
}

var ballRight = function () {
   setTimeout(function() { 
    $("#ball").removeClass("leftM")
    $("#ball").addClass("rightM")
  }, time += 2000);

   setTimeout(function (argument) {
     $("#ball").removeClass("right");
     $("#ball").addClass("left");
   }, time += 3500);
}

var ballLeft = function () {
   setTimeout(function() { 
    $("#ball").removeClass("rightM")
    $("#ball").addClass("leftM")
  }, time += 2000);

   setTimeout(function (argument) {
     $("#ball").removeClass("left");
     $("#ball").addClass("right")
   }, time += 3500);
}

function doSetTimeout(i) {
  setTimeout(function() { alert(i); }, 100);
}

var pingPong = function(number) {
  var holder = [];
  $("#ball").removeClass("left");
  $("#ball").removeClass("right");
  $("#ball").removeClass("leftM");
  $("#ball").removeClass("rightM");
  $("#ball").addClass("right");
  time = 0;
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

var display = function(data) {
  $(".remove").remove();
  for (var i = 0; i < data.length; i++) {
    $("#output").append("<li class='remove'>" + data[i] + "</li>");
  }
}

// Jquery ready
$(document).ready(function() {

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