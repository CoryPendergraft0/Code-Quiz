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
    if(start.dataset.index != cursor){
        start.style.display = "none";
    } else{
        start.start.display = "flex";
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
    }
}
var advance = function() {
    if (cursor < ques.length - 1){
        cursor++;
        displayQuestion();
    }
};
displayQuestion();
nextEl.addEventListener("click", advance);

hideStart();
displayNextQuestion();
