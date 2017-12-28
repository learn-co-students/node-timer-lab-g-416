const input = process.argv[2];
let startingTimeUnit;
let startingTime;

if (input.indexOf("s") != -1) {
  startingTime = parseInt(input.slice(0, -1));
} else {
  startingTime = 60 * parseInt(input.slice(0, -3));
}

let timeRem = startingTime;

global.setInterval(() => {
  if (timeRem > 0) {
    timeRem--;
    console.log(`Left: ${timeRem}s`);
  } else {
    global.clearInterval();
    process.exit();
  }
}, 1000);
