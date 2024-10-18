let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerInterval;
let isRunning = false;

const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');
const lapsContainer = document.getElementById('laps');

// Update the stopwatch display
function updateDisplay() {
    milliseconds += 1;
    
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
    }
    
    if (seconds === 60) {
        seconds = 0;
        minutes += 1;
    }

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0');
}

// Start the stopwatch
startBtn.addEventListener('click', () => {
    if (!isRunning) {
        timerInterval = setInterval(updateDisplay, 10); // Update every 10ms
        isRunning = true;
    }
});

// Pause the stopwatch
pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

// Reset the stopwatch
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    minutesDisplay.textContent = '00';
    secondsDisplay.textContent = '00';
    millisecondsDisplay.textContent = '00';
    lapsContainer.innerHTML = ''; // Clear lap times
});

// Add lap time
lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap: ${lapTime}`;
        lapsContainer.appendChild(lapItem);
    }
});