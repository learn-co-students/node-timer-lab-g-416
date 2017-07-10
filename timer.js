function start() {
  const input = process.argv[2];

  if(validInput(input)) {
    timer(inputToSeconds(input));
  }
}

function timer(seconds) {
  let t = setInterval(function() {
    seconds -= 1;

    if(seconds < 0) {
      process.exit();
    } else {
      printSecondsLeft(seconds);
    }
  }, 1000);
}

function printSecondsLeft(s) {
  console.log(`Left: ${s}s`);
}

function inputToSeconds(input) {
  let seconds;

  if(input[input.length - 1] == 's') {
    seconds = input.slice(0, input.length - 1)
  } else {
    seconds = input.slice(0, input.length - 3) * 60
  }

  return seconds;
}

function validInput(input) {
  const noDigs = input.split(/\d/);

  if(!Number(input[0])) {
    return false;
  }

  if(noDigs[noDigs.length - 1] != 'min' && noDigs[noDigs.length - 1] != 's') {
    return false;
  }

  let v = noDigs.join('');
  if( v != 'min' && v != 's' && v != '.min' && v != '.s') {
    return false;
  }

  return true;
}

start();