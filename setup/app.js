//Declaring variables
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let beginButton = document.getElementById('begin');

//Function to begin the timer
function begin() {
    sessionStorage.setItem('hrs', parseFloat(hours.value));
    sessionStorage.setItem('mins', parseFloat(minutes.value));
    sessionStorage.setItem('secs', parseFloat(seconds.value));
    window.location = '../start/index.html';
}

beginButton.addEventListener('click', button => {
    begin();
})