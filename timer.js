
var length
var args = process.argv

if (args.length < 3) {
  console.log("You must provide a length for the timer");
  process.exit(1);
} else if (!parseInt(args[2])) {
   console.log("Please provide a numberical length for the timer");
   process.exit(1);
} else if (args[2].indexOf("min") == -1) {
  var length = parseInt(args[2]);
} else {
  var length = parseInt(args[2]) * 60;
}


var timer = setInterval(function() {
  length--;
  console.log(`Left: ${length}s`);
  if (length == 0) {
    clearInterval(timer);
    process.exit(0);
  }
}, 1000)
