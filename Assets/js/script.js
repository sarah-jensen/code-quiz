// button variables
const startButton = document.querySelector("#start-button");
const highScores = document.querySelector(".high-scores");
const gameOver = document.querySelector(".game-over");
const questionCards = document.querySelector(".questions");
let currentQuestion = 0;

// timer
const timerEl = document.querySelector("#timer");
let secondsLeft = 60;

function setTime() {
    nextQuestion();
  const timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timer);
      gameOver();
    }
  }, 1000);
}

function endGame() {
  gameOver.setAttribute("display", "block");
  questionCards.setAttribute("display", "none");
}

startButton.addEventListener("click", setTime);
// array of questions
// question = object with answers
// "get question" implied loop driven by user click on buttons

let questions = [
  {
    question: "Question 1",
    answers: ["a", "b", "c", "d"],
    correct: "b"
  },
  {
    question: "Question 2",
    answers: ["1", "2", "3", "4"],
    correct: "4"
  },
];

// create elements, then set innerHTML, append


function nextQuestion(event) {
  console.log(questions[currentQuestion]);
  if (currentQuestion !== 0) {
    console.log(event.target.innerText);
    // console.log(questions[currentQuestion].correct);
    if (event.target.innerText === questions[currentQuestion-1].correct) {
        alert("Correct!");
    } else //incorrect
    if (currentQuestion == questions.length) {
        return;
  }
  let HTML = `
    <div>
        <p>
            ${questions[currentQuestion].question}
        </p>
        <button class = "choices">
            ${questions[currentQuestion].answers[0]}
        </button>
        <button class = "choices">
            ${questions[currentQuestion].answers[1]}
        </button>
        <button class = "choices">
            ${questions[currentQuestion].answers[2]}
        </button>
        <button class = "choices">
            ${questions[currentQuestion].answers[3]}
        </button>
    </div>
`
questionCards.innerHTML = HTML;
let choices = document.querySelectorAll('.choices');
    currentQuestion++;
for (i=0; i< choices.length; i++) {
    choices[i].addEventListener('click', nextQuestion);
}

}

// innerText for populating questions/answers

// nextQuestion();
//     currentQuestion++;

// template literal
let HTML = `
    <div>
        <p>
            ${questions[currentQuestion]}
        </p>
    </div>
`
