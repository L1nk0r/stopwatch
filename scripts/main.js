let time = 0;
let timerID = null;

function get_time(){
   var minutes = Math.floor(time/60);
   var seconds = time % 60;

   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;

   return `${minutes}:${seconds}`;
}

document.querySelector("#start").addEventListener("click", function(){start()});
document.querySelector("#stop").addEventListener("click", function(){stop()});
document.querySelector("#clear").addEventListener("click", function(){clear()});

let stopwatcher = document.querySelector("#stopWatchInput");

function start(){
   timerID = setInterval(update_stopwatch, 1000);
}

function stop(){
   clearInterval(timerID);
}

function update_stopwatch(){
   stopwatcher.innerHTML = get_time();
   time ++;
}

function clear(){
   clearInterval(timerID);
   time = 0;
   stopwatcher.innerHTML = get_time();
}

stopwatcher.innerHTML = get_time();