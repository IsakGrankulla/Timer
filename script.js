

const sound = new Audio('sound1.wav');

let timerId;
var c = 0;
var t;
var timer_is_on = 0;

function timedCount() {
  document.getElementById("time").value = c;
  c = c + 1;
  t = setTimeout(timedCount, 1000);
}

function startCount() {
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
  }
  event.preventDefault();
 timerId = setInterval(function() {sound.play(); }, 10000);
}


function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
  event.preventDefault();
  clearInterval(timerId); 
}
