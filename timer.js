var input = process.argv[2]

var timeType = (input.charAt(input.length - 1));

if (timeType == "s") {
  var seconds = Number(input.substr(0, input.length - 1))

  global.setInterval(() => {
    console.log("Left: " + (seconds - 1) + "s");
    seconds = Number(seconds) - 1;
    seconds < 0 ? process.exit() : null
  }, 1000); 

  global.clearInterval()
} 

if (timeType == "n") {
  var seconds = Number(input.substr(0, input.length - 3)) * 60

  global.setInterval(() => {
    console.log("Left: " + (seconds - 1) + "s");
    seconds = Number(seconds) - 1;
    seconds < 0 ? process.exit() : null
  }, 1000); 

  global.clearInterval()
}
