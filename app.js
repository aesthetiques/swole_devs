'use strict';

function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

function Workout(sun, mon,tues, weds, thurs, fri, sat){
  this.sun = sun,
  this.mon = mon,
  this.tues = tues,
  this.weds = weds,
  this.thurs = thurs,
  this.fri = fri,
  this.sat = sat,
  this.days = [sun,mon,tues,weds,thurs,fri,sat];
}

Workout.prototype.printWorkout = function(){
  for (var i = 0; i < this.days.length; i++){
    console.log(this.days[i]);
  }
};

var beginBuildThree = new Workout('Rest',
['Squats 3x10', 'Bench Press 3x10','Barbell Rows 3x10','Crunches 4x25'],
'Rest',
['Squats 3x10','Overhead Press 3x10','Deadlift 3x10','Crunches 3,10'],
'Rest',
['Squats 3x10','Bench 3x10', 'Barbell Rows 3x10', 'Crunches 4x25'],'Rest');
var beginBuild5 = new Workout('Rest',[],[],[],[],[],'Rest');

beginBuildThree.printWorkout();
