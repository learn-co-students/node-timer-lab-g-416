var userInput = process.argv[2];


var formatSeconds = function(userInput) {
  if (userInput.split('s').length > 1) {
    return parseInt(userInput.split('s')[0]);
  }
  else {
    return false;
  }
}

var formatMinutes = function(userInput) {
  if (userInput.split('m').length > 1) {
    return (parseInt(userInput.split('m')[0]) * 60);
  }
  else {
    return false;
  }
}


var number = formatSeconds(userInput) || formatMinutes(userInput);

var countdown = setInterval(function() {
    number -= 1;
    if (number === 0) {
      console.log('BEEP BEEP BEEP');
      global.clearInterval();
      process.exit(0);
    }
    console.log( `Left: ${number}s`);
  }, 1000)
