var nextEl = document.querySelector("#next");
var questions = document.querySelectorAll(".question");
var cursor = 0;

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