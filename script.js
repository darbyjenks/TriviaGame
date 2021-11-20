let quizContainer=document.getElementById("quiz");
let resultsContainer=document.getElementById("results");
let submitButton=document.getElementById("submit");
let retryButton=document.getElementById("retry");
//let resultsContainer=document.getElementById("results");

const quizQuestions=[
    {
        question:"What movie features singing siblings named Liesl, Friedrich, Brigitta, Louisa, Kurt, Marta and Gretl?",
        answers:{
            a:"Annie",
            b:"101 Dalmations",
            c:"The Sound of Music",
            d:"Chitty Chitty Bang Bang",
        },
        correctAnswer: "c"
    },
    {
        question:"How many books are there in the New Testament?",
        answers:{
            a:"7",
            b:"10",
            c:"23",
            d:"27",
        },
        correctAnswer: "d",
    },
    
    {
        question:"How many pairs of chromosomes are there in each human cell?",
        answers:{
            a:"2",
            b:"23",
            c:"19",
            d:"None. Trick Question!",
        },
        correctAnswer: "b",
    },
    
    {
        question:"Where can you find the Dragon Blood Tree",
        answers:{
            a:"Yemen",
            b:"Syria",
            c:"Iran",
            d:"Iraq",
        },
        correctAnswer: "a",
    },
    
    {
        question:"What building is considered the first skyscraper?",
        answers:{
            a:"Sears Tower",
            b:"Empire State Building",
            c:"Home Insurance Building",
            d:"Eifel Tower",
        },
        correctAnswer: "c",
    },
    
    {
        question:"Which was the last state in the United States that declared Christmas a legal holiday?",
        answers:{
            a:"Utah",
            b:"Oklahoma",
            c:"Texas",
            d:"Indiana",
        },
        correctAnswer: "b",
    },
    
    {
        question:"In which ocean can you find Australia’s Great Barrier Reef?",
        answers:{
            a:"Atlantic",
            b:"Pacific",
            c:"Indian",
            d:"Southern",
        },
        correctAnswer: "b"
    },
    
    {
        question:"Which major motion film marks Bob Saget's directorial debut?",
        answers:{
            a:"Pretty Woman",
            b:"When Harry Met Sally",
            c:"Bloodline",
            d:"Dirty Work",
        },
        correctAnswer: "d",
    },
    
    {
        question:"What sci­fi series, which debuted in 1965, took place in the year 1997?",
        answers:{
            a:"Lost in Space",
            b:"Star Trek",
            c:"Twilight Zone",
            d:"The Jetsons",
        },
        correctAnswer: "a",
    },
    
    {
        question:"In Shakespeare's 'The Taming of the Shrew', who is Petruchio's manservant?",
        answers:{
            a:"Hortensio",
            b:"Petruchio",
            c:"Tranio",
            d:"Grumio",
        },
        correctAnswer: "d",
    }
];

function loadQuiz() {
    const questions = quizQuestions.map((questionObj, idx) => {

        const question = 
        "<div class = 'card-header'>" + questionObj.question + "</div>";

        let options = "<div class = 'card-body'>" + Object.entries(questionObj.answers).map((key,value) => {
            const checkbox = "<input class='form-check-input' type = 'checkbox' id = '"+ key[0] + "'value = '"+ key[1] +"'>";
            const label =  "<label class='form-check-label' for='"+ key[0] + "'>" + key[1] + "</label><br></br>";
            return  "<div class='form-check'>" +checkbox + label + "</div>";
        }).join("") + "</div>";

        

        return "<div class = 'questionBox card' style='width: 30rem;' id = 'question_"+idx + "'>" + question + options + "</div>";
    }).join("</br>");
    document.getElementById("quiz").innerHTML = questions; 
    //document.getElementById("submit").addEventListener(onclick, validateQuiz);
};

    loadQuiz();

    function validateQuiz() {
        let finalResults = [];
        let correct = 0;
        quizContainer.querySelectorAll('.questionBox').forEach((node,idx) => {
            const ques = quizQuestions[idx];
            
            let checked = node.querySelectorAll('input[type="checkbox"]:checked');
            let isCorrect = "❌";
            let yourAnswer = "NO ANSWER";
            if(checked[0]){
                yourAnswer = checked[0].value;
                if(checked[0].id == ques.correctAnswer){
                    isCorrect = "✅";
                    correct++;
                }
            }
            const questionNum = "<div class = 'mb-3'>"+isCorrect +"QUESTION NUMBER: " + (idx+1) + "</div>";
            const result = "<p> Your Answer: " + yourAnswer + "</p>";
            const correctAnswer  = "<p> Correct Answer: " + ques.answers[ques.correctAnswer] + "</p>";
            
            finalResults.push("<div class = 'questionBox card' style='width: 30rem;'>" + questionNum+correctAnswer+result + "</div>");
        });
        submitButton.hidden = true;
        quizContainer.hidden = true;
        retryButton.hidden = false;
        console.log(correct);
        document.body.style.backgroundImage = "url('https://media3.giphy.com/media/5jT0jaNDsM6Ik7X9yq/giphy.gif')";
        if(correct != quizQuestions.length){
            document.body.style.backgroundImage = "url('http://media1.giphy.com/media/x8uKroNI3ScDu/giphy.gif')";
        }
        document.getElementById("results").innerHTML = finalResults.join("</br>");
    }

    function retryQuiz(){
        location.reload();
    }