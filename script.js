var questions = document.querySelectorAll(".que");
var endGame = document.querySelector(".endGame");
var timer = document.querySelector(".timer");
var start = document.querySelector(".start");
var score = document.querySelector(".score");
var cursor = 0;
var secondsLeft = 60;
var numberOfCorrect = 0;
var initials = "";

function displayTimer() {
	timer.textContent = "This much time left!!------->" + secondsLeft;
}

var answers = ["a", "c", "d", "b", "a", "d"];

var hideStart = function(){
    if (start.dataset.index != cursor){
        start.style.display = "none";
    } else{
        start.style.display = "flex";
    }
};
var displayNextQuestion = function () {
	for (var question of questions) {
		if (question.dataset.index != cursor) {
			question.style.display = "none";
		}
		else {
			question.style.display = "block";
		}
    }
};

var displayGameOver = function () {
    if (endGame.dataset.index != cursor) {
        endGame.style.display = "none";
    } else {
        endGame.style.display = "block";
        var initials = prompt("Type Initials");
        saveScore(initials);
    }
}

var saveScore = function (initials) {
    var userScore = {
        userInitials: initials,
        score: numberOfCorrect,
    };
    localStorage.setItem("score", JSON.stringify(userScore));
}

var displayStored = function() {
    var storedUser = localStorage.getItem("score");
    var userObj = JSON.parse(storedUser);
    score.textContent = "User = " + userObj.userInitials + " | Score = " + userObj.score;
}

var test;
var startTimer = function () {
    test = setInterval(decrementTime, 1000);
}
var decrementTime = function () {
    secondsLeft--;
    if (secondsLeft === 0) {
        clearInterval(test);
        cursor = 7;
        displayNextQuestion();
        if(endGame.style.display != "block") {
            displayGameOver();
        }
    }
    displayTimer();
}

var advance = function (event) {
    var element = event.target;
    if (element.matches(".start button")) {
        cursor++;
        startTimer();
        hideStart();
    }
    if (element.matches(".que button")) {
        checkAnswer(element);
        cursor++;
    }
    
    displayNextQuestion();
    displayGameOver();
};

var checkAnswer = function () {
    var userSelected = element.value;
    var correct = answers[cursor - 1];
    if (userSelected != correct) {
        secondsLeft = secondsLeft - 5;
    } else {
        numberOfCorrect++;
    }
}

document.addEventListener('click', advance);

hideStart();
displayNextQuestion();
displayGameOver();
displayTimer();