let timer;
let timeRemaining = 25 * 60;

const timeDisplay = document.getElementById("time");

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

// Task List Functions

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("newTask");

function addTask() {
    const text = taskInput.value.trim();
    if(text) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("taskCheckbox");

        const label = document.createElement("label");
        label.textContent = text;

        li.appendChild(checkbox);
        li.appendChild(label);
        taskList.appendChild(li);
        taskInput.value = "";
    }
}