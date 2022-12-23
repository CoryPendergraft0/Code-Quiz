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

var answers = ["a", "c", "d", "b", "a"];

var hideStart = function(){
    if(start.dataset.index != cursor){
        start.getElementsByClassName.display = "none";
    } else{
        start.getElementsByClassName.display = "flex";
    }
};
var displayNextQuestion = function () {
	for (var question of questions) {
		if (que.dataset.index != cursor) {
			que.style.display = "none";
		}
		else {
			ques.style.display = "block";
		}
    }
};

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
