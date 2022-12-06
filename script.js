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
    if(start.CDATA_SECTION_NODE.index != cursor){
        start.getElementsByClassName.display = "none";
    } else{
        start.getElementsByClassName.display = "flex";
    }
};
var displayNextQuestion = function () {
	for (var question of questions) {
		console.log(question);
		if (question.dataset.index != cursor) {
			question.style.display = "none";
		}
		else {
			question.style.display = "block";
		}
    }
};

var displayQuestion = function () {
    for (var question of questions) {
        console.log(question);
    }
};
var advance = function() {
    if (cursor < questions.length - 1){
        cursor++;
        displayQuestion();
    }
};
displayQuestion();
nextEl.addEventListener("click", advance);

hideStart();
displayNextQuestion();
