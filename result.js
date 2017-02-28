var choices = JSON.parse(localStorage.choices);

function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

//construction function for each workout
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

//new Workout called beginBuildThree
var beginBuildThree = new Workout(['Rest'],
['Squats 3x10', 'Bench Press 3x10','Barbell Rows 3x10','Crunches 4x25'],
['Rest'],
['Squats 3x10','Overhead Press 3x10','Deadlift 3x10','Crunches 3,10'],
['Rest'],
['Squats 3x10','Bench 3x10', 'Barbell Rows 3x10', 'Crunches 4x25'],
['Rest'],
0,1,0);
//new workout called beginBuildFive
var beginBuildFive = new Workout(['Rest'],
['Squat 3x10','Leg press 3x10','Leg curls 3x10','Crunches 4x25'],
['Dumbbell Bench Press 3x10','Dumbbell Flys 3x10','Incline Bench Press 3x10'],
['Barbell Rows 3x10','Pullups 5x5','Widegrip Pulldowns 3x10','Crunches 4x25'],
['Overhead Press 3x10','Front Dumbbell Raise 3x10','Dips 4x10'],
['Barbell Curls 3x10','Tricep Extension 3x10','Crunches 3x10'],
['Rest'],
0,1,1);
var workouts = [beginBuildThree, beginBuildFive];
//function that compares choices array from localstorage to lvls, goals, and splits of our Workouts
function findWorkout(){
  for(var i = 0; i < workouts.length; i++){
    var currentWorkout = workouts[i];
    if(choices[0] === currentWorkout.lvl && choices[1] === currentWorkout.goal && choices[2] === currentWorkout.split){
      console.log(currentWorkout.days);
      return(currentWorkout);
    }
  }
}
findWorkout();

var selectedWorkout = findWorkout();

function displayWorkout(workout){
  var week = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
  for(var i = 0; i < workout.days.length; i++){
    var todaysWorkout = workout.days[i];
    for(var j = 0; j < todaysWorkout.length; j++){
      newElement('li', 'class', 'day-li', week[i] + '-ul', todaysWorkout[j]);
    }
  }
}

displayWorkout(selectedWorkout);
