'use strict';

function newElement(elType, elId, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute('href', '#');
  el.setAttribute('class', 'my-button');
  el.setAttribute('id', elId);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

function upperCaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperCaseFirst('hello'));
var choices = [];
var numAns = 0;

function Workout(sun, mon,tues, weds, thurs, fri, sat,lvl,goal,split){
  this.sun = sun,
  this.mon = mon,
  this.tues = tues,
  this.weds = weds,
  this.thurs = thurs,
  this.fri = fri,
  this.sat = sat,
  this.days = [sun,mon,tues,weds,thurs,fri,sat],
  this.lvl = lvl,
  this.goal = goal,
  this.split = split;
}

Workout.prototype.printWorkout = function(){
  for (var i = 0; i < this.days.length; i++){
    // console.log(this.days[i]);
  }
};

var beginBuildThree = new Workout('Rest',
['Squats 3x10', 'Bench Press 3x10','Barbell Rows 3x10','Crunches 4x25'],
'Rest',
['Squats 3x10','Overhead Press 3x10','Deadlift 3x10','Crunches 3,10'],
'Rest',
['Squats 3x10','Bench 3x10', 'Barbell Rows 3x10', 'Crunches 4x25'],
'Rest',
0,1,0);
var beginBuildFive = new Workout('Rest',
['Squat 3x10','Leg press 3x10','Leg curls 3x10','Crunches 4x25'],
['Dumbbell Bench Press 3x10','Dumbbell Flys 3x10','Incline Bench Press 3x10'],
['Barbell Rows 3x10','Pullups 5x5','Widegrip Pulldowns 3x10','Crunches 4x25'],
['Overhead Press 3x10','Front Dumbbell Raise 3x10','Dips 4x10'],
['Barbell Curls 3x10','Tricep Extension 3x10','Crunches 3x10'],
'Rest',
0,1,1);

beginBuildThree.printWorkout();

var answer = document.getElementById('options-container');
answer.addEventListener('click', answerCast);

function answerCast(event){
  event.preventDefault();
  event.stopPropagation();
  // console.log('listening');

  var target = event.target;
  var targetId = target.getAttribute('id');

  var lvls = ['beginner','intermediate','advanced'];
  var goals = ['tone','build','crossfit'];

//below code counts num of clicks
  if (numAns == 0) {
//if clicks counted is zero find the Id of the click on and push a certain number to choices array
    if (targetId == 'beginner') {
      choices.push(0);
      // console.log('is beginner');
    } else if (targetId == 'intermediate') {
      choices.push(1);
    } else if (targetId == 'advanced') {
      choices.push(2);
    }
    // after first click run below, below takes the child elements of option contianer and removes them, appends newElement from goals array
    for (var i = 0; i < lvls.length; i++){
      var parentEl = document.getElementById('options-container');
      var el = document.getElementById(lvls[i]);
      console.log(lvls[i]);
      console.log(el);
      parentEl.removeChild(el);
      newElement('a', goals[i], 'options-container', upperCaseFirst(goals[i]));
    }
  } else if (numAns == 1) {
    if (targetId == 'tone') {
      choices.push(0);
    } else if (targetId == 'build') {
      choices.push(1);
    } else if (targetId == 'crossfit') {
      console.log('gtfo');
    }
//if clicks is at count 1, on click, target clicked by Id and push corresponing number into choices array
  } else if (numAns == 2) {
    if (targetId == 'three-day') {
      choices.push(0);
    } else if (targetId == 'five-day') {
      choices.push(1);
    }
  }
  numAns++;
  console.log(choices);
}
