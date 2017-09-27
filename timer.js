var num = parseInt(process.argv[2].match(/\d+/g));
var type =  process.argv[2].match(/[a-zA-Z]+/g);

var timerLength = parseInt(process.argv[2].match(/\d+/g));

if (type == 'min') {
  timerLength = num * 60;
  for (var i = 1; i < num * 60; i++) {
    global.setTimeout(function() {
      console.log('Left: ' + (timerLength -= 1) + 's');
    }, (1000 * i));
  }
} else {
  for (var i = 1; i < num; i++) {
    global.setTimeout(function() {
      console.log('Left: ' + (timerLength -= 1) + type);
    }, (1000 * i));
  }
}
