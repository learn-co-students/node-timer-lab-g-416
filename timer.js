var time = process.argv[2];
let seconds;

if (!time) { process.exit(); }

if (time.slice(-1) === 's') {
  seconds = parseInt(time, 10)
} else if (time.slice(-3) === 'min') {
  seconds = parseInt(time, 10) * 60;
}

setInterval(function() {
  seconds--;
  if (seconds >= 0) {
    console.log('Left: ' + seconds + 's');
  } else {
    clearInterval();
    process.exit();
  }
}, 1000);
