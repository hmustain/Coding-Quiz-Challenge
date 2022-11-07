// array of questions

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

var userHighScore = [];

// Declare score and questions variables
// score = 0 because we start w/ a score of 0
var score = 0;
// questions asked starts at 0
// var questionsAsked = 0;
// tutor helped me here, this vague title is tied to the questions being asked
var index = 0

// Declare variables
// timer
var timer = document.querySelector("#timer");
// first button on intro to start time
var startTime = document.querySelector("#start");
// var questionsQuiz = document.querySelector("#questions");
// var container = document.querySelector("#container");
// variable for the intro to the quiz, later set to hide words (tutor helped me)
var intro = document.querySelector("#intro");
// var for questions (tutor helped me)
var ques = document.querySelector("#ques");
var questitle = document.querySelector("#questitle");
// variable for possible answers to the questions
var choices = document.querySelector("#choices");
// variable for user initials field at end of quiz.. later set to remove hidden feature once quiz is over, tutor helped me with this
var userInitials = document.querySelector("#user-initials");
// variable for user input when they are putting their initials in to be stored to the local storage. AskBCS helped me with this
var input = document.querySelector("#input");
// variable for the submit button 
var submit = document.querySelector("#submit");
// variable for correct answers this is used to determine if answer was correct score points, if wrong deduct time
var answers = document.querySelector("#answers");
// this is a variable for when you select an answer, you get text content to come up correct or incorrect a friend of mine helped me with this
var validAnswer = document.querySelector("#valid-answer");

var timerInterval = ""
var highScore = document.querySelector("#high-score");
var userHighScoreEl = document.querySelector("#user-high-score");

var goBackButton = document.querySelector("#go-back");
var clearButton = document.querySelector("#clear");





// seconds left determines how many seconds we start the quiz with
var secondsLeft = 41;
// variable to set the penalty
var penalty = 5;
// var createUl = document.createElement("ul");

// add even listener to start time
startTime.addEventListener("click", function (event) {
        setTime(event);
        displayQuestions();
        intro.classList.add("hide");
});



function setTime(event) {
        // create var w/ setInterval function?
         timerInterval = setInterval(function () {
                secondsLeft--;
                timer.textContent = "Time: " + secondsLeft;
                if (secondsLeft <= 0) {
                        clearInterval(timerInterval);
                        compare(event);
                        quizOver();
                        timer.textContent = "";
                }
        }, 1000);
}

// tutor helped me from line 112-137
function displayQuestions() {
        validAnswer.textContent = "";
        questitle.textContent = questions[index].question;
        choices.innerHTML = "<li class='li-choices'>" + questions[index].choices[0] + "</li>";
        choices.innerHTML = choices.innerHTML + "<li class='li-choices'>" + questions[index].choices[1] + "</li>";
        choices.innerHTML = choices.innerHTML + "<li class='li-choices'>" + questions[index].choices[2] + "</li>";
        choices.innerHTML = choices.innerHTML + "<li class='li-choices'>" + questions[index].choices[3] + "</li>";

        var liChoices = document.querySelectorAll(".li-choices");


        for (let i = 0; i < liChoices.length; i++) {
                liChoices[i].addEventListener("click", function (event) {
                        compare(event);
                        index++;
                        if (index < questions.length) {
                                setTimeout(displayQuestions, 1000)
                                // displayQuestions()

                        } else {
                                clearInterval(timerInterval);
                                setTimeout(quizOver, 1000);
                                // quizOver();
                        }
                })
        }


}

// combination of help from instructor, askBCS and a friend
function compare(event) {
        var answers = event.target;
        console.log('The event target that I am trying to compare', answers);
        // console.log('answers.matches(".li-choices")', answers.matches(".li-choices"));

        if (answers.matches(".li-choices")) {

                // var createDiv = document.createElement("div");
                // createDiv.setAttribute("id", "createDiv");
                console.log('this is the answer selected', questions[index].answer);

                if (answers.textContent === questions[index].answer) {
                        score = score + 5;
                        console.log('the current score', score);
                        validAnswer.textContent = "That is Correct!";
                } else {
                        secondsLeft = secondsLeft - penalty;
                        validAnswer.textContent = "I'm sorry that is not correct!";
                }
        }
}

function quizOver() {

        ques.innerHTML = "";
        timer.innerHTML = "";
        userInitials.classList.remove("hide");
        validAnswer.textContent = "";

        // create heading
        var createQuizOverH1 = document.createElement("h1");
        createQuizOverH1.setAttribute("id", "createQuizOverH1");
        createQuizOverH1.textContent = "Game over! You have reached the end of the quiz.";
        ques.appendChild(createQuizOverH1);

        // create paragraph
        var creatQuizOverP = document.createElement("p");
        creatQuizOverP.setAttribute("id", "createQuizOverP");
        ques.appendChild(creatQuizOverP);

        // if statement to calculate score
        // need to get help from tutor here
        // if (secondsLeft <= 0) {
                // var timeRemaining = secondsLeft;
                creatQuizOverP.textContent = "Your final score is: " + score;
                ques.appendChild(creatQuizOverP);
        // }


// went back to previous lessons for help and then askBCS helped me finish it
        var submitButton = document.querySelector("#submit");

        submitButton.addEventListener("click", function (event) {
                event.preventDefault();
                userInitials.classList.add("hide");
                highScore.classList.remove("hide");
                console.log(input.value);
                var user = input.value;
                var user = {
                        initials: input.value.trim(),
                        score: score,
                };
                userHighScore.push(user);
                localStorage.setItem("user", JSON.stringify(userHighScore));
                displayHighScore();
        });
}

// tutor helped me with the rest of the lines here to get user high score to display
function displayHighScore () {
        if (localStorage.getItem("user")) {
                userHighScore = JSON.parse(localStorage.getItem("user"));
        } 
        userHighScoreEl.textContent = ""
        for (let i = 0; i < userHighScore.length; i++) {
        var userHighScoreLi = document.createElement("li")
        userHighScoreLi.textContent = userHighScore[i].initials + " - " + userHighScore[i].score
        userHighScoreEl.appendChild(userHighScoreLi); 
        }
}

goBackButton.addEventListener("click", function () {
        location.reload();
}) 

clearButton.addEventListener("click", function() {
        localStorage.clear();
        displayHighScore();
})
