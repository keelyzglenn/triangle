$(document).ready(function() {
  $("form").submit(function(event) {
    var a = parseInt($("input#side1").val());
    var b = parseInt($("input#side2").val());
    var c = parseInt($("input#side3").val());

    if (a = b = c) {
      $("#tri").text("equilateral");
      $(".answer").show();
    // } else if (a = b != c|| b = c != a|| a = c != b) {
    //   $("#tri").text("isosceles");
    //   $(".answer").show();
  } else if (a != b != c) {
      $("#tri2").text("scalene");
      $(".answer2").show();
    // } else if (a + b <= c || b + c <= a || a + c <= b ) {
    //   $("#tri").text("not a triangle");
    //   $(".answer").show();
    }
    event.preventDefault();
  });
});
