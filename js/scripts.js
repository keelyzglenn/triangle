$(document).ready(function() {
  $("form").submit(function(event) {
    var a = parseFloat($("input#side1").val());
    var b = parseFloat($("input#side2").val());
    var c = parseFloat($("input#side3").val());
    var d = Math.max(a,b,c);
    var e = (a + b + c) - d;

    if ( e >= d ) {
      if ( a === b && a === c) {
        $("#tri").text("equilateral");
        $(".answer").show();

      } else if ( a === b && a === (e/2) || a === c && c === (e/2) || b === c && c === (e/2)) {
        $("#tri").text("isosceles");
        $(".answer").show();

      } else {
        $("#tri").text("not a triangle");
        $(".answer").show();
      }

      event.preventDefault();
    }
  });
});
