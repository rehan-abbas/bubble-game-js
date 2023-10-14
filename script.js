var timer = 6;
var hits = 0;
var score = 0;
function bubble() {
  var clutter = "";
  for (var i = 1; i <= 144; i++) {
    var hits = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${hits}</div>`;
  }
  document.querySelector(".btm").innerHTML = clutter;
}
function runTimer() {
  var time = setInterval(() => {
    if (timer === 0) {
      clearInterval(time);
      document.querySelector(".btm").innerHTML = `<h1>GAME OVER</h1>`;
    } else {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
  }, 1000);
}
function hit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
  hits = rn;
}
function iscore() {
  score += 10;
  document.querySelector("#scores").textContent = score;
}
document.querySelector(".btm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hits) {
    runTimer();
    iscore();
    hit();
    bubble();
  }
});
bubble();
runTimer();
hit();
