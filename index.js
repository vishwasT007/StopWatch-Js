let hour = (document.getElementById('hr').textContent = 0);
let minutes = (document.getElementById('min').textContent = 0);
let seconds = (document.getElementById('sec').textContent = 0);
let microSec = (document.getElementById('msec').textContent = 0);

let runningTimer = false;
//Actual Function Where Stop Watch will Completly Executes;

function stopWatch() {
	//First Check is RunningTimer is true or Flase

	if (runningTimer == true) {
		microSec++;
		if (microSec == 100) {
			seconds++;
			microSec = 0;
		}

		if (seconds == 60) {
			minutes++;
			seconds = 0;
		}

		if (minutes == 60) {
			hour++;
			minutes = 0;
			seconds = 0;
		}

		document.getElementById('hr').innerHTML = hour;
		document.getElementById('min').innerHTML = minutes;
		document.getElementById('sec').innerHTML = seconds;
		document.getElementById('msec').innerHTML = microSec;
		setTimeout(stopWatch, 10);
	}
}

function clear() {
	document.getElementById('hr').innerHTML = 0;
	document.getElementById('min').innerHTML = 0;
	document.getElementById('sec').innerHTML = 0;
	document.getElementById('msec').innerHTML = 0;
}

function start() {
	runningTimer = true;
	stopWatch();
}

function stop() {
	runningTimer = false;
}

function reset() {
	runningTimer = false;
	clear();
}
