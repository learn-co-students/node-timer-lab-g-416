function timer() {
  length--;
  if (length >= 0) {
    console.log('Left: ' + length + 's');
  } else { 
    global.clearInterval(startTimer);
    process.exit();
  }
}

function convertToNum(str) {
  var num;
  var min = str.indexOf('min');
  var sec = str.indexOf('s');  

  if (min != -1) {
    num = str.slice(str.substr(min), -3);
    return num * 60;
  }

  if (sec != -1) {
    num = str.slice(str.substr(sec), -1);
    return num;
  }
}

var startTimer;
var length = convertToNum(process.argv[2]);

startTimer = global.setInterval(timer, 1000);