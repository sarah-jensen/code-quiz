// button variables
const startButton = document.querySelector("#start-button");
const startCard = document.querySelector(".get-started");
const highScores = document.querySelector(".high-scores");
const gameOver = document.querySelector(".game-over");
const questionCard = document.querySelector(".questions");
let currentQuestion = 0;

// timer
const timerEl = document.querySelector("#timer");
let secondsLeft = 60;

// array of dynamically generated quiz question objects with question + answers + correct answer info
let questions = [
  {
    question:
      "You can chain together actions/methods in which programming language?",
    answers: ["JavaScript", "Bootstrap", "CSS", "jQuery"],
    correct: "jQuery",
  },
  {
    question: "Which language is needed for a user to interact with a webpage?",
    answers: ["CSS", "JavaScript", "HTML", "GitHub"],
    correct: "JavaScript",
  },
  {
    question: "In JavaScript, a group of related data is called a/an...",
    answers: ["string", "object", "array", "function"],
    correct: "array",
  },
  {
    question: "Media queries are feature of which language?",
    answers: ["JavaScript", "HTML", "CSS", "jQuery"],
    correct: "CSS",
  },
  {
    question: "To use a function in JavaSript, you must...",
    answers: [
      "define the function",
      "call the function",
      "give a condition for the function",
      "a & b only",
    ],
    correct: "a & b only",
  },
];

// sets the timer
function setTime() {
  startCard.style.display = "none";
  questionCard.style.display = "block";
  nextQuestion();
  const timer = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timer);
      endGame();
    }
  }, 1000);

  //   progresses to the next question
  function nextQuestion(event) {

    console.log(questions[currentQuestion]);
    if (currentQuestion !== 0) {
      console.log(event.target.innerText);
      // console.log(questions[currentQuestion].correct);
      if (event.target.innerText === questions[currentQuestion - 1].correct) {
        alert("Correct!");
      } //incorrect
      else if (currentQuestion == questions.length) {
        return;
      }
      // creates the appearance of the question cards
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
  `;
      // "get question" implied loop driven by user click on buttons
      //   presents next question
      questionCards.innerHTML = HTML;
      let choices = document.querySelectorAll(".choices");
      currentQuestion++;
      for (i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", nextQuestion);
      }
    }
  }
}
// displays text field for username to log high score
function endGame() {
  gameOver.setAttribute("display", "block");
  questionCards.setAttribute("display", "none");
}
// event listener for "start" button
startButton.addEventListener("click", setTime);

// create elements, then set innerHTML, append

// innerText for populating questions/answers

// nextQuestion();
//     currentQuestion++;

// // template literal
// let HTML = `
//     <div>
//         <p>
//             ${questions[currentQuestion]}
//         </p>
//     </div>
// `
