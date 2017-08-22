var timeRemaining = parseInt(process.argv[2]);

if (process.argv[2].includes('min')){
  timeRemaining *= 60;
}

const displayTimeRemaining = () => {
  timeRemaining -= 1;
  console.log(`Left: ${timeRemaining}s`)
  if (timeRemaining <= 0) {
    clearInterval(timer)
    process.exit();
  }
}

displayTimeRemaining(timeRemaining);
var timer = setInterval(displayTimeRemaining, 1000);

