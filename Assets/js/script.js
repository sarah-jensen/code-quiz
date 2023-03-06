// button variables
const startButton = document.querySelector("#start-button");
const startCard = document.querySelector(".get-started");
const highScores = document.querySelector(".high-scores");
const gameOver = document.querySelector(".game-over");
const questionCard = document.querySelector(".questions");
let currentQuestion = 0;


// timer
const timerEl = document.querySelector("#timer");
let secondsLeft = 10;

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
      timerEl.innerHTML = secondsLeft;
      if (secondsLeft === 0) {
        clearInterval(timer);
        endGame();
      }
    }, 1000);
  }

// displays the next question
function nextQuestion() {
     //makes the current question !== 0
    if (currentQuestion !== 0) {
        console.log(questions[currentQuestion]);
    }
    
    // creates template literal (HTML outline) for the question cards
    let HTML = `
    <div>
    <h2>
    ${questions[currentQuestion].question}
    </h2>
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
    
    questionCard.innerHTML = HTML;
    
    let choices = document.querySelectorAll(".choices");
    
    // adds event listener to answer buttons
    for (let i = 0; i < choices.length; i++) {
        choices[i].addEventListener("click", checkAnswer);
    }
    
    function checkAnswer(event) {
        console.log(event.target.innerText);
        // sets reaction when answer clicked
        if (event.target.innerText === questions[currentQuestion].correct) {
            alert("Correct!");
            currentQuestion++;
            nextQuestion();
        } else if (event.target.innerText !== questions[currentQuestion].correct) {
            alert("Incorrect!");
            currentQuestion++;
            nextQuestion();
        } else if (currentQuestion === questions.length) {
            endGame();
        }
    }
    
}
// displays "Game over" card
function endGame() {
  questionCard.style.display = "none";
  gameOver.style.display = "block";
}

// event listener for "start" button
startButton.addEventListener("click", setTime);

// choices.addEventListener("click", checkAnswer);

// if (currentQuestion !== 0) {
//   console.log(event.target.innerText);
//   // console.log(questions[currentQuestion].correct);
//   if (event.target.innerText === questions[currentQuestion - 1].correct) {
//     alert("Correct!");
//   } //incorrect
//   else if (currentQuestion == questions.length) {
//     return;
//   }

// "get question" implied loop driven by user click on buttons
//   presents next question

//       let choices = document.querySelectorAll(".choices");
//       currentQuestion++;
//       for (i = 0; i < choices.length; i++) {
//         choices[i].addEventListener("click", nextQuestion);
//       }
    // }
