let quizContainer=document.getElementById(quiz);
let resultsContainer=document.getElementById(results);
let buttonContainer=document.getElementById(button);
let resultsContainer=document.getElementById(results);

function generateQuiz(qiuzQuestions, quizContainer, resultsContainer, submitButton){};
function displayResults(){};
buildQuiz();
submitButton.addEventListener('click', displayResults);

var quizQuestions=[
    {
        question:"What movie features singing siblings named Liesl, Friedrich, Brigitta, Louisa, Kurt, Marta and Gretl?",
        answers:{
            a:"Annie"
            b:"101 Dalmations"
            c:"The Sound of Music"
            d:"Chitty Chitty Bang Bang"
        },
        correctAnswer: "c"
    },
    {
        question:"How many books are there in the New Testament?",
        answers:{
            a:"7"
            b:"10"
            c:"23"
            d:"27"
        },
        correctAnswer: "d"
    },
    
    {
        question:"How many pairs of chromosomes are there in each human cell?",
        answers:{
            a:"2"
            b:"23"
            c:"19"
            d:"None. Trick Question!"
        },
        correctAnswer: "b"
    },
    
    {
        question:"Where can you find the Dragon Blood Tree",
        answers:{
            a:"Yemen"
            b:"Syria"
            c:"Iran"
            d:"Iraq"
        },
        correctAnswer: "a"
    },
    
    {
        question:"What building is considered the first skyscraper?",
        answers:{
            a:"Sears Tower"
            b:"Empire State Building"
            c:"Home Insurance Building"
            d:"Eifel Tower"
        },
        correctAnswer: "c"
    },
    
    {
        question:"Which was the last state in the United States that declared Christmas a legal holiday?",
        answers:{
            a:"Utah"
            b:"Oklahoma"
            c:"Texas"
            d:"Indiana"
        },
        correctAnswer: "b"
    },
    
    {
        question:"In which ocean can you find Australia’s Great Barrier Reef?",
        answers:{
            a:"Atlantic"
            b:"Pacific"
            c:"Indian"
            d:"Southern"
        },
        correctAnswer: "b"
    },
    
    {
        question:"Which major motion film marks Bob Saget's directorial debut?",
        answers:{
            a:"Pretty Woman"
            b:"When Harry Met Sally"
            c:"Bloodline"
            d:"Dirty Work"
        },
        correctAnswer: "d"
    },
    
    {
        question:"What sci­fi series, which debuted in 1965, took place in the year 1997?",
        answers:{
            a:"Lost in Space"
            b:"Star Trek"
            c:"Twilight Zone"
            d:"The Jetsons"
        },
        correctAnswer: "a"
    },
    
    {
        question:"In Shakespeare's 'The Taming of the Shrew', who is Petruchio's manservant?",
        answers:{
            a:"Hortensio"
            b:"Petruchio"
            c:"Tranio"
            d:"Grumio"
        },
        correctAnswer: "d"
    }
];