var counter = parseInt(process.argv[2])
var type = process.argv[2].split(/\d/, 2)[1]

function timer(seconds) {
  console.log('Left: ' + seconds + 's');
}

var runTimer = function () {
  global.setInterval(function () {
    if (counter === 0) {
      global.clearInterval();
      console.log("Time's Up!");
      process.exit(0);
    }
    counter--;
    timer(counter);
  }, 1000)
}

if (type === 's') {
  runTimer(counter);
} else if (type === 'min') {
  counter = counter * 60
  runTimer(counter);
} else {
  console.log('There was a problim');
  process.exit(1);
}
