var seconds = 0;
var argv = process.argv;

if (!argv[2]){
  console.log("Must have an argument like 5s or 1min");
}
else if (argv[2].indexOf('s')>=0){
  seconds = parseInt(argv[2].slice(0,2), 10);
}
else if (argv[2].indexOf('min')>=0){
  seconds = parseInt(argv[2].slice(0,-3), 10) + 59;
}
else {
  console.log("Invalid argument")
  process.exit(1);
}

var timer = setInterval(function() {
  seconds -= 1;
  console.log("Left: " + seconds + "s")
  if (seconds == 0){
    clearInterval(timer);
    process.exit(0)
  }
}, 1000);
