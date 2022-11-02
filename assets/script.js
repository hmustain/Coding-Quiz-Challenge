// Let's start with creating a variable with an array to store our questions

var questions = [
        {
                question: "What is a useful tool that developers often use to output a message to the web console?",
                choices: ["Conditional Statements", "Functions", "Console.log", "GitHub"],
                answer: "Console.log"
        },
        {
                question: "What method do you use to access an element by ID?",
                choices: ["Document.getElementById", "Window.getElementById", "Alert.getElementById", "Prompt.getElementById"],
                answer: "Document.getElementById"
        },
        {
                question: "Commonly used data types DO NOT include:",
                choices: ["Integers", "Alerts", "Strings", "Booleans"],
                answer: "Alerts"
        },
        {
                question: "The condition in an if/else statement is enclosed with __________",
                choices: ["Quotes", "Curly brackets", "Square brackets", "Parentheses"],
                answer: "Parentheses"
        },
        {
                question: "Arrays in JavaScript can be used to store __________",
                choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
                answer: "All of the above"
        },
        {
                question: "String values must be enclosed within __________ when being assigned to variables",
                choices: ["Quotes", "Commas", "Curly brackets", "Parentheses"],
                answer: "Quotes"
        },
        {
                question: "The __________ method is used to convert a JavaScript value to a JSON string",
                choices: ["JSON parse", "JSON.stringify", "Join", "Prevent default"],
                answer: "JSON.stringify"
        },
        {
                question: "The __________ method is used to convert a JSON string back to a JavaScript value",
                choices: ["JSON.stringify", "Prevent default", "JSON.parse", "Switch"],
                answer: "JSON.parse"
        },
];

// Declare score and questions variables
// score = 0 because we start w/ a score of 0
var score = 0;
// questions asked starts at 0
var questionsAsked = 0;

var index = 0

// Declare variables
var timer = document.querySelector("#timer");
var startTime = document.querySelector("#start");
var questionsQuiz = document.querySelector("#questions");
var container = document.querySelector("#container");
var intro = document.querySelector("#intro");
var ques = document.querySelector("#ques");
var questitle = document.querySelector("#questitle");
var choices = document.querySelector("#choices");
var userInitials = document.querySelector("#user-initials");
var input = document.querySelector("#input");
var submit = document.querySelector("#submit");



// create a seconds left variable. i'm going to do 15 seconds / question for total of 120
var secondsLeft = 120;
var createUl = document.createElement("ul");

// add even listener to start time
startTime.addEventListener("click", function () {
        setTime();
        displayQuestions();
        intro.classList.add("hide")
        render(questionsAsked);
});

function render(questionsAsked) {
        questions.textContent = "";

}

function setTime() {
        // create var w/ setInterval function?
        var timerInterval = setInterval(function () {
                secondsLeft--;
                timer.textContent = "Time: " + secondsLeft;
                if (secondsLeft === 0) {
                        clearInterval(timerInterval);
                        quizOver();
                        timer.textContent = "Game Over!";
                }
        }, 1000);
}

function displayQuestions() {
        questitle.textContent = questions[index].question;
        choices.innerHTML = "<li class='li-choices'>" + questions[index].choices[0] + "</li>";
        choices.innerHTML = choices.innerHTML + "<li class='li-choices'>" + questions[index].choices[1] + "</li>";
        choices.innerHTML = choices.innerHTML + "<li class='li-choices'>" + questions[index].choices[2] + "</li>";
        choices.innerHTML = choices.innerHTML + "<li class='li-choices'>" + questions[index].choices[3] + "</li>";

        var liChoices = document.querySelectorAll(".li-choices");

        for (let i = 0; i < liChoices.length; i++) {
                liChoices[i].addEventListener("click", function () {
                        index++
                        if (index < questions.length) {
                                displayQuestions()

                        } else {
                                ques.classList.add("hide")
                                userInitials.classList.remove("hide")
                        }
                })
        }

}



