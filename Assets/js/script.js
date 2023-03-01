// button variables
const startButton = document.querySelector('.start-button');
const highScores = document.querySelector('.high-scores');
const gameOver = document.querySelector('.game-over');


// timer
const timerEl = document.querySelector('#timer');
const timer;
const secondsLeft = 60;

function startTimer() {
    timer = setInterval(function() {      

        if(secondsLeft >= 0) {
            secondsLeft--;
            timerEl.textContent = secondsLeft;
        }else {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    timerEl.textContent = "00"
    gameOver.setAttribute("display", "block");
}

startButton.addEventListener("click", startTimer)
// add timer
// array of questions
// question = object with answers
// "get question" implied loop driven by user click on buttons
