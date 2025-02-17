let timer;
let timeRemaining = 25 * 60;

const startBttn = document.getElementById("start");
const timeDisplay = document.getElementById("time");
const resetBttn = document.getElementById("reset");

startBttn.addEventListener("click", startTimer);
resetBttn.addEventListener("click", stopTimer)

function startTimer() {
    if(timer) clearInterval(timer);

    timer = setInterval(timerHelper, 1000);
}

function timerHelper() {
    if(timeRemaining > 0) {
        timeRemaining--;
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    } else {
        clearInterval(timer);
        alert("Time's up!")
    }
}

function stopTimer() {
    clearInterval(timer);
    timeRemaining = 25 * 60;
    timeDisplay.textContent = `25:00`;
}