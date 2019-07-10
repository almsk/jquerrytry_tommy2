import "./styles.css";

let dead = true;

$("h1").css("color", "red");
setInterval(function() {
  if (dead === true) {
    $("a").css("background", "yellowgreen");
    $("h1")
      .slideToggle("fast")
      .text("scroedinger's cat is dead");
    dead = false;
  } else {
    $("a").css("background", "yellow");
    $("h1")
      .slideToggle("fast")
      .text("scroedinger's cat is alive");
    dead = true;
  }
  $("p").toggleClass("uppercase");
}, 1000);
