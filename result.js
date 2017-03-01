var choices = JSON.parse(localStorage.choices);

function newElement(elType, elAttribute, elAttributeName, elParentId, elText){
  var el = document.createElement(elType);
  el.setAttribute(elAttribute, elAttributeName);
  el.textContent = elText;
  var parentEl = document.getElementById(elParentId);
  parentEl.appendChild(el);
}

//construction function for each workout
function Workout(name, sun, mon,tues, weds, thurs, fri, sat,lvl,goal,split){
  this.name = name,
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
var beginToneThree = new Workout(
  'Beginner 3-day tone workout:',
  ['Rest'],
  ['Run 1x15', 'Dumbbell squats 3x20', 'Dumbbell Lunges 3x20', 'Pushups 4x25','Crunches 5x25'],
  ['Rest'],
  ['Run 1x15', 'Deadlift 3x12', 'Standing Dumbbell press 3X12', 'Planks 2x60', 'Burpies 2x25'],
  ['Rest'],
  ['Run 1x15', 'Dumbbell Lunges 3x12', 'Pushups 4x25', 'Shoulder Press 3x12', 'Pull ups 3x5'],
  ['Rest'],
  0,0,0);
var beginToneFive = new Workout(
  'Beginner 5-day tone workout:',
  ['Rest'],
  ['Run 1x15', 'Dumbbell squats 3x20', 'Dumbbell Lunges 3x20', 'Pushups 4x25', 'Crunches 5x25'],
  ['Run 1x15', 'Shrugs 3x12', 'Squats 4x12', 'Leg Extension 3x12', 'Chin-Ups 3x5'],
  ['Run 1x15', 'Deadlift 3x12', 'Standing Dumbbell Press 3X12', 'Planks 2x60', 'Burpies 2x25'],
  ['Run 1x15', 'Shrugs 3x12', 'Squats 4x12', 'Leg Extension', '3x12Chin-Ups 3x5'],
  ['Run 1x15', 'Dumbbell Lunges 3x12', 'Pushups 4x25', 'Shoulder Press 3x12', 'Pull ups 3x5'],
  ['Rest'],
  0,0,1);
//new Workout called beginBuildThree
var beginBuildThree = new Workout(
  'Beginner 3-day build workout:',
  ['Rest'],
  ['Squats 3x10', 'Bench Press 3x10','Barbell Rows 3x10','Crunches 4x25'],
  ['Rest'],
  ['Squats 3x10','Overhead Press 3x10','Deadlift 3x10','Crunches 3,10'],
  ['Rest'],
  ['Squats 3x10','Bench 3x10', 'Barbell Rows 3x10', 'Crunches 4x25'],
  ['Rest'],
  0,1,0);
//new workout called beginBuildFive
var beginBuildFive = new Workout(
  'Beginner 5-day build workout:',
  ['Rest'],
  ['Squat 3x10','Leg press 3x10','Leg curls 3x10','Crunches 4x25'],
  ['Dumbbell Bench Press 3x10','Dumbbell Flys 3x10','Incline Bench Press 3x10'],
  ['Barbell Rows 3x10','Pullups 5x5','Widegrip Pulldowns 3x10','Crunches 4x25'],
  ['Overhead Press 3x10','Front Dumbbell Raise 3x10','Dips 4x10'],
  ['Barbell Curls 3x10','Tricep Extension 3x10','Crunches 3x10'],
  ['Rest'],
  0,1,1);

var intermediateToneThree = new Workout(
  'Intermediate 3-day tone workout:',
  ['Rest'],
  ['Run 1x20', 'Dumbbell squats 3x20', 'One Arm Barbell Rows 3X12', 'Dumbbell Lunges 3x20', 'Pushups 4x25', 'Crunches 5x25'],
  ['Rest'],
  ['Run 1x20', 'Deadlift 3x12', 'Standing Dumbbell press 3X12', 'One Leg Barbell Squats 4X10', 'Planks 2x60','Burpies 2x25'],
  ['Rest'],
  ['Run 1x20', 'Bent Over Row 4x12', 'Dumbbell Lunges 3x12', 'Pushups 4x25', 'Shoulder Press 3x12', 'Pull ups 3x5'],
  ['Rest'],
  1,0,0);
var intermediateToneFive = new Workout(
  'Intermediate 5-day tone workout:',
  ['Rest'],
  ['Run 1x20', 'Dumbbell squats 3x20', 'One Arm Barbell Rows 3X12', 'Dumbbell Lunges 3x20','Pushups 4x25', 'Crunches 5x25'],
  ['Run 1x20', 'Front-squats 3x15', 'Shrugs 3x12', 'Squats 4x12', 'Leg Extension 3x12', 'Chin-Ups 3x5'],
  ['Run 1x20', 'Deadlift 3x12', 'Standing Dumbbell press 3X12', 'One Leg Barbell Squats 4X10', 'Planks 2x60', 'Burpies 2x25'],
  ['Run 1x20', 'Front-squats 3x15', 'Shrugs 3x12', 'Squats 4x12', 'Leg Extension 3x12', 'Chin-Ups 3x5'],
  ['Run 1x20', 'Inverted rows 4x12', 'Dumbbell Lunges 3x12', 'Pushups 4x25', 'Shoulder Press 3x12', 'Pull ups 3x5'],
  ['Rest'],
  1,0,1);
var intermediateBuildThree = new Workout(
  'Intermediate 3-day build workout:',
  ['Rest'],
  ['Squats 3x10', 'Bench Press 3x10', 'Barbell Rows 3x10', 'Curls 3x10', 'Tricep Extensions 3x10', 'Dips 5x10', 'Crunches 4x25'],
  ['Rest'],
  ['Squats 3x10', 'Overhead Press, 3x10', 'Deadlift 3x10', 'Pullups 5x5', 'Incline Bench Press 3x10', 'Bent Over Rows 3x10', 'Crunches 4x25'],
  ['Rest'],
  ['Squats 3x10', 'Bench 3x10', 'Barbell Rows 3x10', 'Lat Pulldowns 3x10', 'Dips 5x10', 'Lateral Raises 4x10', 'Crunches 4x 25'],
  ['Rest'],
  1,1,0);
var intermediateBuildFive = new Workout(
  'Intermediate 5-day build workout:',
  ['Rest'],
  ['Squats 3x10', 'Leg press 3x10', 'Leg curls  3x10', 'Calf Raises 4x10', 'Crunches 4x25'],
  ['Dumbbell Bench Press 3x10', 'Dumbbell Flyes 3x10', 'Incline Bench Press 3x10', 'Lateral Raises 3x10', 'Plank 3x60'],
  ['Barbell Rows 3x10', 'Deadlift 3x10', 'Widegrip Pulldowns 3x10', 'Pullups 5x5', 'Crunches 4x25'],
  ['Overhead Press 3x10', 'Front Dumbbell Raise 3x10', 'Dips 4x10', 'Seated rows 4x10', 'Lateral Dumbbell Raises 4x10'],
  ['Curls 3x10', 'Tricep Extension 3x10', 'Pushups 4x25', 'Dumbbell Overhead Press 3x10', 'Crunches 3x10'],
  ['Rest'],
  1,1,1);

var advancedToneThree = new Workout(
  'Advanced 3-day tone workout:',
  ['Rest'],
  ['Run 1x20','Dumbbell squats 3x20','One Arm Barbell Rows 3X12','Dumbbell Lunges 3x20','Pullups 5x5','Pushups 4x25','Crunches 5x25'],
  ['Rest'],
  ['Run 1x20','Deadlift 3x12','Standing Dumbbell press 3X12','One Leg Barbell Squats 4X10','Pullups 5x5','Planks 2x60','Burpies 2x25'],
  ['Rest'],
  ['Run 1x20','Bent Over Row 4x12','Dumbbell Lunges 3x12','Pushups 4x25','Shoulder Press 3x12','Pull ups 3x5','Crunches 5x25'],
  ['Rest'],
  2,0,0);

var advancedToneFive = new Workout(
  'Advanced 5-day tone workout:',
  ['Rest'],
  ['Run 1x20', 'Dumbbell squats 3x20', 'One Arm Barbell Rows 3X12', 'Dumbbell Lunges 3x20', 'Pushups 4x25', 'Crunches 5x25', 'Dumbbell Thrusters 4x20'],
  ['Run 1x20', 'Front-squats 3x15', 'Shrugs 3x12', 'Squats 4x12', 'Leg Extension 3x12', 'Chin-Ups 3x5', 'Dumbbell Thrusters 4x20'],
  ['Run 1x20', 'Deadlift 3x12', 'Standing Dumbbell press 3X12', 'One Leg Barbell Squats 4X10', 'Planks 2x60', 'Burpies 2x25', 'Dumbbell Thrusters 4x20'],
  ['Run 1x20', 'Front-squats 3x15', 'Shrugs 3x12', 'Squats 4x12', 'Leg Extension 3x12', 'Chin-Ups 3x5', 'Dumbbell Thrusters 4x20'],
  ['Run 1x20', 'Inverted row 4x12', 'Dumbbell Lunges 3x12', 'Pushups 4x25', 'Dumbbell Thrusters 4x20', 'Shoulder Press 3x12', 'Pull ups 3x5', 'Dumbbell Thrusters 4x20'],
  ['Rest'],
  2,0,1);

var advancedBuildThree = new Workout(
  'Advanced 3-day build workout:',
  ['Rest'],
  ['Squats 3x10','Bench Press 3x10','Barbell Rows 3x10','Curls 3x10','Tricep Extensions 3x10','Lateral Barbell Raises 3x10','Dips 5x10','Crunches 4x25'],
  ['Rest'],
  ['Squats 3x10','Overhead Press 3x10','Deadlift 3x10','Dumbbell Flys 3x10','Pullups 5x5','Incline Bench Press 3x10','Bent Over Rows 3x10','Crunches 4x25'],
  ['Rest'],
  ['Squats 3x10','Bench 3x10','Clean 3x10','Barbell Rows 3x10','Lat Pulldowns 3x10','Dips 5x10','Lateral Raises 4x10','Crunches 4x 25'],
  ['Rest'],
  2,1,0);

var advancedBuildFive = new Workout(
  'Advanced 5-day build workout:',
  ['Rest'],
  ['Squats 3x10','Leg press 3x10','Leg curls  3x10','Calf Raises 4x10','Crunches 4x25','Leg Extension 3x10'],
  ['Dumbbell Bench Press 3x10','Dumbbell Flyes 3x 10','Incline Bench Press 3x10','Lateral Raises 3x10','Dumbbell Front Raises 4x10','Plank 3x60'],
  ['Barbell Rows 3x10','Deadlift 3x10','Dumbbell Shrugs 4x10','Widegrip Pulldowns 3x10','Pullups 5x5','Crunches 4x25'],
  ['Overhead Press 3x10','Front Dumbbell Raise 3x10','Dips 4x10','Seated rows 4x10','Lateral Dumbbell Raises 4x10','Incline Bench 3x10'],
  ['Barbell Curls 3x10','Tricep Extension 3x10','Dumbbell Lateral Raise 3x10','Pushups 4x25','Dumbbell Overhead Press 3x10','Crunches 3x10'],
  ['Rest'],
  2,1,1);

var workouts = [beginToneThree, beginToneFive, beginBuildThree, beginBuildFive, intermediateToneThree, intermediateToneFive, intermediateBuildThree, intermediateBuildFive, advancedToneThree, advancedToneFive, advancedBuildThree, advancedBuildFive];
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
  newElement('h2', 'id', 'workout-title', 'workout-name', workout.name);
  for(var i = 0; i < workout.days.length; i++){
    var todaysWorkout = workout.days[i];
    for(var j = 0; j < todaysWorkout.length; j++){
      newElement('li', 'class', 'day-li', week[i] + '-ul', todaysWorkout[j]);
    }
  }
}

displayWorkout(selectedWorkout);
