function isMins(time) {
  return time.match(/min/g);
}

function covertToSeconds(time) {
  return time * 60;
}

// get user arguments
if (process.argv.length === 2) {
  console.error('You must provide a an argument of mins or seconds, e.g. 5s or 2min');
  process.exit();
}

let amount;
const time = process.argv[process.argv.length -1];
// Perpare time duration
if (isMins(time)) {
  amount = time.replace('min', '');
  amount = amount * 60;
} else {
  amount = time.replace('s', '');
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
