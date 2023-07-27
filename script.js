let timeBegan = null;
let timeStopped = null;
let stoppedDuration = 0;
let startInterval = null;
let flag = false;

const timer = document.querySelector(".container");

timer.addEventListener("click", function() {
	if(!flag){
		startTimer();
		flag = true;
	}else{
		stopTimer();{
			flag = false;
		}
	}
})

function stopTimer() {
	timeStopped = new Date();
	clearInterval(startInterval);
}

function startTimer() {
	if(timeBegan === null){
		timeBegan = new Date();
	}
	
	if(timeStopped !== null){
		stoppedDuration += (new Date() - timeStopped);
	}
	
	startInterval = setInterval(clockRunning, 10);
}

function clockRunning() {
	let currentTime = new Date();
	let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
	
	let minutes = timeElapsed.getUTCMinutes();
	let seconds = timeElapsed.getUTCSeconds();
	let milliseconds = timeElapsed.getUTCMilliseconds();
	
	milliseconds = Math.floor(milliseconds/10);
	
	document.querySelector("h1").innerHTML = (minutes = minutes < 10 ? "0" + minutes:minutes) + ":" + (seconds = seconds < 10 ? "0" + seconds:seconds) + ":" + (milliseconds = milliseconds < 10 ? "0" + milliseconds:milliseconds);
}

timer.addEventListener("dblclick", function(){
	clearInterval(startInterval);
	timeBegan = null;
	timeStopped = null;
	stoppedDuration = 0;
	flag = false;
	document.querySelector("h1").innerHTML = "00:00:00";
})