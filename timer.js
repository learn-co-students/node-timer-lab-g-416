function isMins(time) {
  return time.match(/min/g);
}

function convertToMins(time) {
  return time * 60000;
}

function covertToSeconds(time) {
  return time * 1000;
}

// get user arguments
const time = process.argv[process.argv.length -1];
let formattedDuration = 0;
let amount;
// Perpare time duration
if (isMins(time)) {
  amount = time.replace('min', '');
  amount = amount * 60;
} else {
  amount = time.replace('s', '');
  formattedDuration = covertToSeconds(amount);
}

setInterval(function() {
  amount -= 1;
  if (amount > 0){
    console.log(`Left: ${amount}s`);
  } else{
    clearInterval();
    process.exit();
  }

},1000);
