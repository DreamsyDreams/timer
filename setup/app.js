//Declaring variables
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let beginButton = document.getElementById('begin');

//Declaring helper variable
let hrs;
let mins;
let secs;
let alerted = 0;

//Function to begin the timer
function begin() {
    if (isNaN(parseFloat(hours.value))) {
        sessionStorage.setItem('hrs', '0');
    } else {
        sessionStorage.setItem('hrs', parseFloat(hours.value));
    } 
    if (isNaN(parseFloat(minutes.value))) {
        sessionStorage.setItem('mins', '0');
    } else {
        sessionStorage.setItem('mins', parseFloat(minutes.value));
    } 
    if (isNaN(parseFloat(seconds.value))) {
        sessionStorage.setItem('secs', '0');
    } else {
        sessionStorage.setItem('secs', parseFloat(seconds.value));
    }

    if (parseFloat(hours.value) < 0 || parseFloat(hours.value) > 99) {
        hrs = 0;
    } else {
        hrs = 1;
    }
    if (parseFloat(minutes.value) < 0 || parseFloat(minutes.value) > 59) {
        mins = 0;
    } else {
        mins = 1;
    }
    if (parseFloat(seconds.value) < 0 || parseFloat(seconds.value) > 99) {
        secs = 0;
    } else {
        secs = 1;
    }
    if (isNaN(parseFloat(hours.value)) && isNaN(parseFloat(minutes.value)) && isNaN(parseFloat(seconds.value))) {
        alerted = 1;
        alert('Every value cannot be 0 at the same time');
    }
    if (secs === 0 || mins === 0 || hrs === 0) {
        alerted = 1;
        alert('Values are greter or lower than they should be');
    }
    if (parseFloat(hours.value) === 0 && parseFloat(minutes.value) === 0 && parseFloat(seconds.value) === 0) {
        alerted = 1;
        alert('Every value cannot be 0 at the same time');
    }
    if (alerted === 0) {
        window.location = '../start/index.html';
    } else {
        alerted = 0;
        alert('Something went wrong, please try again');
    }
}

beginButton.addEventListener('click', button => {
    begin();
})