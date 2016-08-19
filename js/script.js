var validation = function(number) {
    var pattern = /^\d+$/;
    return pattern.test(number);
}

var pingPong = function (number) {
  var holder = [];
  for (var i = 1; i <= number; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      holder.push("pingpong")
    } else if (i % 3 === 0) {
      holder.push("ping")
    } else if (i % 5 === 0) {
      holder.push("pong")
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

  $("button").click(function (event) {
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