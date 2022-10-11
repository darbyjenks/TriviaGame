let questionNumEl = document.getElementById("questionNum");
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

  let i = 0;
  let score = 0;
  function getQuestions() {
    console.log(questions[0].title);
    questionEl.textContent = questions[i].title
    answerAEl.textContent = questions[i].a
    answerBEl.textContent = questions[i].b
    answerCEl.textContent = questions[i].c
    answerDEl.textContent = questions[i].d
    // let answer = questions[i].answer;
}

function startQuiz(){
    // event.target.matches("#answers");
    answersEl.addEventListener("click", function(event){
        console.log(event.target);
        if(event.target.dataset.answer === questions[i].answer){
            score += 20;
        }
        i++;
        if(i < questions.length){
            getQuestions();
        } else {
            alert ('score: ' + score)
        }
    })
}

getQuestions();
startQuiz();
