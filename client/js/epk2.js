$("#waterBackground")[0].playbackRate = 0.8;

let angelPlaying;
let wordPlaying;
let angelPaused;
let wordPaused;

$(".angelBox").on("click", function () {
  $(".wordText").show();
  $(".sunVideo").hide();
  $(".starlingsVideo").show();
  $("#audioPlayer")[0].src = $("#songs li a")[1];

  $("#audioPlayer")[0].play();
});

$(".wordBox").on("click", function () {
  $(".wordText").hide();
  $(".sunVideo").show();
  $(".starlingsVideo").hide();
  $("#audioPlayer")[0].src = $("#songs li a")[0];
  $("#audioPlayer")[0].play();
});
