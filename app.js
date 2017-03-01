'use strict';
//Creates take me to my quiz button
var parentEl = document.getElementById('question-container');
var startQuizButton = document.createElement('a');
startQuizButton.setAttribute('href', 'quiz.html');
startQuizButton.setAttribute('class', 'my-button');
startQuizButton.setAttribute('id', 'start');
startQuizButton.textContent = 'Take me to the Quiz!';
parentEl.appendChild(startQuizButton);

if (localStorage.choices) {
  var parentEl = document.getElementById('question-container');
  var hiddenQuizResults = document.createElement('a');
  hiddenQuizResults.setAttribute('href', 'results.html');
  hiddenQuizResults.setAttribute('class', 'my-button');
  hiddenQuizResults.setAttribute('id', 'results');
  hiddenQuizResults.textContent = 'Take me to my Results!';
  parentEl.appendChild(hiddenQuizResults);
}
