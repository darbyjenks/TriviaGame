let questionNumEl = document.getElementById("questionNum");
let containerEl = document.getElementById('container');
let timerEl = document.getElementById("timer");
let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let answerAEl = document.getElementById("answerA");
let answerBEl = document.getElementById("answerB");
let answerCEl = document.getElementById("answerC");
let answerDEl = document.getElementById("answerD");

// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      a: "strings", 
      b: "booleans", 
      c: "alerts", 
      d: "numbers",
      answer: "c",
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
        a: "quotes", 
        b: "curly brackets", 
        c: "parentheses", 
        d: "square brackets",
      answer: "c",
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
      answer: "d",
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      a: "commas", 
      b: "curly brackets", 
      c: "quotes", 
      d: "parentheses",
      answer: "c",
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      a :"JavaScript", 
      b: "terminal / bash", 
      c: "for loops", 
      d: "console.log",
      answer: "d",
    }
  ];

  let secondsLeft = 60;
  let i = 0;
  let score = 0;
  // let name = prompt('What is your name?')

  function setTime() {
    var timerInterval = setInterval ( function() {
      secondsLeft --;
      timerEl.textContent = secondsLeft + " seconds remaining";
      if(secondsLeft === 0 || i == questions.length) {
        clearInterval(timerInterval);
        // displayTopScores();
        console.log('scorestime')
        startQuiz();
      }
    }, 1000);
    return timerInterval
  }
  setTime();

  function getQuestions() {
    console.log(questions[0].title);
    questionEl.textContent = questions[i].title
    answerAEl.textContent = questions[i].a
    answerBEl.textContent = questions[i].b
    answerCEl.textContent = questions[i].c
    answerDEl.textContent = questions[i].d
}

function startQuiz(){
    answersEl.addEventListener("click", function(event){
      event.preventDefault();
        console.log(event.target);
        if(event.target.dataset.answer === questions[i].answer){
            score += 20;
        }
        i++;
        if(i < questions.length){
            getQuestions();
        } else {
            alert ('score: ' + score);
            // localStorage.setItem('score', JSON.stringify(score));
            let name = prompt('Please enter your name');
            // localStorage.setItem('name', JSON.stringify(name));
            var highScores =
            JSON.parse(window.localStorage.getItem("highScores")) || [];
            // console.log(name)
            let playerScore = {
              name : name,
              score : score
            }
            highScores.push(playerScore);
            localStorage.setItem("highScores", JSON.stringify(highScores));
            // console.log(playerScore)
            displayResults();
        }
    })
}

getQuestions();
startQuiz();

function displayResults(){
  var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  console.log(highScores + " scores");
  highScores.forEach(function(highScores){
    var pEl = document.createElement('p');
    pEl.textContent = highScores.name + " " + highScores.score;
    document.body.appendChild(pEl);
  })
}
