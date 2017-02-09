var time = 0
var argv = process.argv[2]

if (!argv) {
   console.log('Please provide an argument, e.g., 5s or 1min.');
   process.exit()
 } else if (argv.indexOf('s') > -1) {
   time = parseInt(argv.slice(0, -1), 10);
 } else if (argv.indexOf('min') > -1) {
   time = parseInt(argv.slice(0, -3), 10) * 60;
 } else {
   console.log('Please provide a valid argument, e.g., 5s or 1min.');
   process.exit()
 }


var secondsInterval = setInterval(function() {
  time--
  if (time == 0) {
    clearInterval(secondsInterval)
    process.exit();
  }
  console.log("Left: " + time + 's')

}, 1000)