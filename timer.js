var timer = function(timeParams) {
  var timeLeft = timeParams[0];
  var unitOfTime = timeParams[1];

  setInterval(function() {
    timeLeft -= 1;
    timerMessage(timeLeft, unitOfTime);

    if (timeLeft === 0) {
      clearInterval(this);
      console.log("Time's up!");
      process.exit(0);
    }
  }, 1000);
}

function timerMessage(timeLeft, unitOfTime) {
  console.log("Left: " + timeLeft + unitOfTime);
}

function processArgs(input) {
  var totalTime = parseInt(input.split("s")[0]);
  var unitOfTime = input.replace(/\d+/, '');

  if (unitOfTime === 'min') {
    totalTime *= 60;
    unitOfTime = 's';
  }
  return [totalTime, unitOfTime];
}

var args = process.argv;

if (args.length != 3) {
  console.log("Incorrect number of arguments input.  Please try again using this format: node timer 100s");
  process.exit(1);
} else {
  var timeParams = processArgs(args[2]);

  timer(timeParams);
}
