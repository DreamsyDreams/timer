//Getting values from sessionStorage
let hours = parseFloat(sessionStorage.getItem('hrs'));
let minutes = parseFloat(sessionStorage.getItem('mins'));
let seconds = parseFloat(sessionStorage.getItem('secs'));

//Accessing elements from index.html
let hoursText = document.getElementById('hrs');
let minutesText = document.getElementById('mins');
let secondsText = document.getElementById('secs');

//Accessing buttons
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

//Making elements be equal to the values from sessionStorage
if (hours < 10) {
    hoursText.innerText = '0' + hours.toString();
} else {
    hoursText.innerText = hours.toString();
}
if (minutes < 10) {
    minutesText.innerText = '0' + minutes.toString();
} else {
    minutesText.innerText = minutes.toString();
}
if (seconds < 10) {
    secondsText.innerText = '0' + seconds.toString();
} else {
    secondsText.innerText = seconds.toString();
}

//Variable to hold the interval
let interval;

if (minutes > 0 && seconds === 0) {
    minutes--;
    if (minutes < 10) {
        minutesText.innerText = '0' + minutes.toString();
    } else {
        minutesText.innerText = minutes;
    }
    seconds = 59;
    secondsText.innerText = '59';
}

if (hours > 0 && minutes === 0 && seconds === 0) {
    hours--;
    if (hours < 10) {
        hoursText.innerText = '0' + hours.toString();
    } else {
        hoursText.innerText = hours;
    }
    minutes = 59;
    minutesText.innerText = '59';
    seconds = 60;
    secondsText.innerText = '59';
}

function count() {
    if (seconds === 0) {
        seconds = 59;
        if (minutes === 0) {
            minutes = 59;
            if (hours === 0) {
                window.clearInterval(interval);
                return;
            } else {
                hours--;
            }
            if (hours < 10) {
                hoursText.innerText = '0' + hours.toString();
            } else {
                hoursText.innerText = hours;
            }
        } else {
            minutes--;
        }
        if (minutes < 10) {
            minutesText.innerText = '0' + minutes.toString();
        } else {
            minutesText.innerText = minutes;
        }
    } else {
        seconds--;
    }
    if (seconds < 10) {
        secondsText.innerText = '0' + seconds.toString();
    } else {
        secondsText.innerText = seconds;
    }
    if (parseFloat(hoursText.innerText) === 0 && parseFloat(minutesText.innerText) === 0 && parseFloat(secondsText.innerText) === 0) {
        pauseButton.hidden = true;
        resetButton.hidden = false;
    }
}

startButton.addEventListener('click', button => {
    interval = window.setInterval(count, 1000);
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