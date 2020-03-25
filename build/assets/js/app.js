window.sr=ScrollReveal();





var $green = "#33CC99";
var $blue = "#3399CC";
var $orange = "#FF9933";

function changeColor(color) {
  var x = document.getElementsByClassName("border-color-changer");
  var y = document.getElementsByClassName("background-color-changer");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.borderColor = color;
    x[i].style.stroke = color;
  }
  for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = color;
  }
}

var header = document.getElementById("buttons");
var btns = header.getElementsByClassName("button-square");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
