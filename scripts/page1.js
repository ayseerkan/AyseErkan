$(document).ready(function() {
    $("#slick").slick();
})

var mouseOver = document.getElementsByClassName("subtitle");
for (var i = 0; i < mouseOver.length; i++) {
  mouseOver[i].onmouseover = function (e) {
    var randColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    var colorStr = "0px 0px 38px 0px " + randColor;
    $(this).animate({ "box-shadow": colorStr }, 250);
  };
  mouseOver[i].onmouseout = function (e) {
    $(this).animate({ "box-shadow": "none" }, 250);
  };
}