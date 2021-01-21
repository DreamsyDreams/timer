//Getting values from sessionStorage
const hours = sessionStorage.getItem('hrs');
const minutes = sessionStorage.getItem('mins');
const seconds = sessionStorage.getItem('secs');

//Accessing elements from index.html
let hoursText = document.getElementById('hrs');
let minutesText = document.getElementById('mins');
let secondsText = document.getElementById('secs');

//Accessing buttons
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

//Making elements be equal to the values from sessionStorage
if (parseFloat(hours) < 10) {
    hoursText.innerText = '0' + hours;
} else {
    hoursText.innerText = hours;
}
if (parseFloat(minutes) < 10) {
    minutesText.innerText = '0' + minutes;
} else {
    minutesText.innerText = minutes;
}
if (parseFloat(seconds) < 10) {
    secondsText.innerText = '0' + seconds;
} else {
    secondsText.innerText = seconds;
}

//Variable to hold the interval
let interval;

let secs = parseFloat(seconds);
let mins = parseFloat(minutes);
let hrs = parseFloat(hours);

function count() {
    secs--;
    if (secs < 10) {
        secondsText.innerText = '0' + secs.toString();
    } else {
        secondsText.innerText = secs;
    }

    if (secs === 0) {
        secs = 60;
        if (hrs === 0 && mins === 0) {
            return;
        } else {
            mins--;
        }
        if (mins < 10) {
            minutesText.innerText = '0' + mins.toString();
        } else {
            minutesText.innerText = mins;
        }

        if (mins === 0) {
            mins = 60;
            if (hrs === 0) {;
                window.clearInterval(interval);
            } else {
                hrs--;
            }
            if (hrs< 10) {
                hoursText.innerText = '0' + hrs.toString();
            } else {
                hoursText.innerText = hrs;
            }

        }
    }

}

startButton.addEventListener('click', button => {
    interval = window.setInterval(count, 1);
    pauseButton.hidden = false;
    resetButton.hidden = true;
    startButton.hidden = true;
});

pauseButton.addEventListener('click', button => {
    window.clearInterval(interval);
    startButton.hidden = false;
    resetButton.hidden = false;
    pauseButton.hidden = true;
});

resetButton.addEventListener('click', button => {
    sessionStorage.removeItem('hrs');
    sessionStorage.removeItem('mins');
    sessionStorage.removeItem('secs');
    window.location = '../setup/index.html';
});