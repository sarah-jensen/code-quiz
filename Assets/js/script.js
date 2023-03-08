// button variables
const startButton = document.querySelector("#start-button");
const startCard = document.querySelector(".get-started");
const highScores = document.querySelector(".score");
const gameOver = document.querySelector(".game-over");
const questionCard = document.querySelector(".questions");
const submitButton = document.querySelector("#submit-button");
const retakeButton = document.querySelector("#retake-quiz");
const tryAgainButton = document.querySelector("#try-again");
const highScoreBtn = document.querySelector(".high-scores")
let currentQuestion = 0;
let questionText = document.querySelector(".question-text");
let answerA = document.querySelector("#answer-a");
let answerB = document.querySelector("#answer-b");
let answerC = document.querySelector("#answer-c");
let answerD = document.querySelector("#answer-d");
let userName = document.querySelector("#player-name");
let alert = document.querySelector("#feedback");
let scoreCounter = 0;

// timer
const timerEl = document.querySelector("#timer");
let secondsLeft = 60;

// array of dynamically generated quiz question objects with question + answers + correct answer info
let questions = [
  {
    question:
      "You can chain together actions/methods in which programming language?",
    answers: ["A. JavaScript", "B. Bootstrap", "C. CSS", "D. jQuery"],
    correct: "answer-d",
  },
  {
    question: "Which language is needed for a user to interact with a webpage?",
    answers: ["A. CSS", "B. JavaScript", "C. HTML", "D. GitHub"],
    correct: "answer-b",
  },
  {
    question: "In JavaScript, a group of related data is called a/an...",
    answers: ["A. string", "B. object", "C. array", "D. function"],
    correct: "answer-c",
  },
  {
    question: "Media queries are feature of which language?",
    answers: ["A. JavaScript", "B. HTML", "C. CSS", "D. jQuery"],
    correct: "answer-c",
  },
  {
    question: "To use a function in JavaSript, you must...",
    answers: [
      "A. define the function",
      "B. call the function",
      "C. give a condition for the function",
      "D. a & b only",
    ],
    correct: "answer-d",
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
    if (secondsLeft === 0 || currentQuestion === questions.length) {
      clearInterval(timer);
      timerEl.innerHTML = 00;
      endGame();
    }
  }, 1000);

      // set reaction for correct and incorrect answers
      function checkAnswer(event) {
        console.log(event.target.textContent);
        if (event.target.id === questions[currentQuestion].correct) {
          // display Correct message
          alert.innerHTML = "Correct!";
          // clear Correct message
          setTimeout(function () {
            alert.innerHTML = "";
          }, 1000);
          console.log("correct");
          currentQuestion++;
          scoreCounter++;
          nextQuestion();
        } else if (
          event.target.textContent !== questions[currentQuestion].correct
        ) {
          // display incorrect message
          alert.innerHTML = "Incorrect";
          // clear incorrect message
          setTimeout(function () {
            alert.innerHTML = "";
          }, 1000);
          console.log("incorrect");
          currentQuestion++;
          secondsLeft = secondsLeft - 5;
          nextQuestion();
        }
      }

  // displays the next question
  function nextQuestion() {
    //makes the current question !== 0
    if (currentQuestion < questions.length) {
      console.log(questions[currentQuestion]);
      questionText.textContent = questions[currentQuestion].question;
      answerA.textContent = questions[currentQuestion].answers[0];
      answerB.textContent = questions[currentQuestion].answers[1];
      answerC.textContent = questions[currentQuestion].answers[2];
      answerD.textContent = questions[currentQuestion].answers[3];
    } else {
      console.log("Game Over");
      endGame();
    }

    let choices = document.querySelectorAll(".choices");

    // adds event listener to answer buttons
    for (let i = 0; i < choices.length; i++) {
      choices[i].addEventListener("click", checkAnswer);
    }


  }

  // track correct answers in local storage
  function setScore() {
    console.log("save score");
    localStorage.setItem("scoreCounter", JSON.stringify(scoreCounter));
  }

  // displays "Game over" card
  function endGame() {
    console.log("Wrap it up");
    questionCard.style.display = "none";
    gameOver.style.display = "block";
    setScore();
  }
}

// event listener for "start" button
startButton.addEventListener("click", setTime);

// create object with name and score
let userScore = {
  name: userName.value,
  score: scoreCounter.value,
};

// save userName in local storage
function setUserName() {
  console.log("save name");
  console.log(userName.val);
  let newUserName = $("#player-name")[0].value;
  console.log(newUserName);
  localStorage.setItem("userName", JSON.stringify(newUserName));
}

function showScores() {
  console.log("scores");
  gameOver.style.display = "none";
  startCard.style.display = "none";
  questionCard.style.display = "none";
  highScores.style.display = "block";
  renderScore();

  // display userScore from local storage
  function renderScore() {
    let showName = JSON.parse(localStorage.getItem("userScore"));
    document.querySelector(".rank").textContent = showName;
  }
}
// event listener for "submit" button
submitButton.addEventListener("click", setUserName);

// event.preventDefault();

// display user name on high score page


// reload page when "retake quiz" button clicked
function startOver() {
  console.log("go again");
  gameOver.style.display = "none";
  startCard.style.display = "block";
  questionCard.style.display = "none";
  highScores.style.display = "none";
  location.reload();
}
// event listener for "retake quiz" button on game-over card
retakeButton.addEventListener("click", startOver);

// event listener for "try again" button on high scores card
tryAgainButton.addEventListener("click", startOver);

// event listener for "high scores" button
highScoreBtn.addEventListener("click", showScores);
