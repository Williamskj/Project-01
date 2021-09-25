$("#btn1").on("click", function() {
  $("#box").animate({
    height: "+=35px",
    width: "+=35px"
  }, "fast");
});

$("#btn2").on("click", function() {
  $("#box").animate().css({
    backgroundColor: "blue"
  }, 2500);
});

$("#btn3").on("click", function() {
  $("#box").fadeOut();
});

$("#btn4").on("click", function() {
  $("#box").fadeIn("fast").animate({
    height: "150px",
    width: "150px"
  }, "fast").css({
    backgroundColor: "orange"
  }, 1500);
});
#box {
  transition: background-color 2.5s ease-out
}