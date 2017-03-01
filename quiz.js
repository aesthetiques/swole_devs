'use strict';
var parentEl = document.getElementById('options-container');

//create each button element
function newElement(elType, elId, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute('href', '#');
  el.setAttribute('class', 'my-button');
  el.setAttribute('id', elId);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

//save to local saveProductsToLocalStorage
function saveChoicesToLocalStorage(choices){
  localStorage.choices = JSON.stringify(choices);
  console.log('Saved to local storage');
}

//uppercase what's in the textContent of the html nodes you create,
//so that the buttons will appear properly
function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperCaseFirst('hello'));
var choices = [];
var numAns = 1;

//ADDING EVENT LISTENER
var answer = document.getElementById('options-container');
answer.addEventListener('click', answerCast);

function answerCast(event){
  console.log('answerCast, numAns: ', numAns);

  if (numAns < 3) {
    event.preventDefault();
    event.stopPropagation();
  }

  var target = event.target;
  var targetId = target.getAttribute('id');

  var lvls = ['beginner','intermediate','advanced'];
  var goals = ['tone','build','crossfit'];
  var daySplit = ['3 day', '5 day'];
  var submit = 'Show me my results!';

//below code counts num of clicks
  if (numAns == 1) {
//if clicks counted is zero find the Id of the click on and push a certain number to choices array
    if (targetId == 'beginner') {
      numAns++;
      choices.push(0);
      console.log(choices);
      // console.log('is beginner');
    } else if (targetId == 'intermediate') {
      numAns++;
      choices.push(1);
      console.log(choices);
    } else if (targetId == 'advanced') {
      numAns++;
      choices.push(2);
      console.log(choices);
    } else {
      return;
    }
    // after first click run below, below takes the child elements of option contianer and removes them, appends newElement from goals array
    for (var i = 0; i < lvls.length; i++){
      var parentEl = document.getElementById('options-container');
      var el = document.getElementById(lvls[i]);
      parentEl.removeChild(el);
      newElement('a', goals[i], 'options-container', upperCaseFirst(goals[i]));
    }
  } else if (numAns == 2) {
    if (targetId == 'tone') {
      numAns++;
      choices.push(0);
      console.log(choices);
    } else if (targetId == 'build') {
      numAns++;
      choices.push(1);
      console.log(choices);
    } else if (targetId == 'crossfit') {
      console.log('gtfo');
    } else {
      return;
    }
    //after second click, run this to delete the old buttons; this is separated
    //because there are a different # of buttons from the final set
    for (var k = 0; k < goals.length; k++){
      var parentEl = document.getElementById('options-container');
      var el = document.getElementById(goals[k]);

      parentEl.removeChild(el);
    }
    //because there are a different number of buttons in the new set, we loop a different amount for creation.
    for (var k = 0; k < daySplit.length; k++){
      var parentEl = document.getElementById('options-container');
      var el = document.getElementById(goals[k]);
      newElement('a', daySplit[k], 'options-container', daySplit[k]);
    }
    //if clicks is at count 1, on click, target clicked by Id and push corresponing number into choices array
  } else if (numAns == 3) {
    console.log('got into numAns 2');
    if (targetId == '3 day') {
      numAns++;
      choices.push(0);
      console.log(choices);
    } else if (targetId == '5 day') {
      numAns++;
      choices.push(1);
      console.log(choices);
    } else {
      return;
    }
    //loop through deletion of previous buttons
    for (var j = 0; j < daySplit.length; j++){
      var parentEl = document.getElementById('options-container');
      var el = document.getElementById(daySplit[j]);
      parentEl.removeChild(el);
    }
    // 'take me to my results' button below
    var parentEl = document.getElementById('options-container');
    var takeToResults = document.createElement('a');
    takeToResults.setAttribute('href', 'results.html');
    takeToResults.setAttribute('class', 'my-button');
    takeToResults.textContent = 'Take me to my results!';
    parentEl.appendChild(takeToResults);
  }
  saveChoicesToLocalStorage(choices);
}
