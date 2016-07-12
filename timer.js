var args = process.argv;

var seconds = 0;

if (!args[2]){
  console.log("Please enter an argument for the timer!");
}
else if (args[2].indexOf('s')>=0) {
  seconds = parseInt(args[2].slice(0,2), 10);
}
else if (args[2].indexOf('min')>=0) {
  seconds = parseInt(args[2].slice(0,-3), 10) * 60;
}
else{
  console.log("Wrong argument passed!");
  process.exit(1);
}


var timer = setInterval(function(){
  seconds -= 1;
  console.log(`Left: ${seconds}s`)
  if (seconds == 0){
      clearInterval(timer);
      console.log("Time's up!");
      process.exit(0);
  }
}, 1000);
