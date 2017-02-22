var timeLeft = 0
var arg = process.argv[2]

if (!arg) {
   console.log('Please provide an argument, e.g. 5s or 1min');
   process.exit()
 } else if (arg.indexOf('s') > -1) {
   timeLeft = parseInt(arg.slice(0, -1), 10);
 } else if (arg.indexOf('min') > -1) {
   timeLeft = parseInt(arg.slice(0, -3), 10) * 60;
 } else {
   console.log('Please provide a valid argument, e.g. 5s or 1min');
   process.exit()
 }


 var interval = setInterval(()=>{
   timeLeft --
   console.log(`Left: ${timeLeft}s`)
  if (timeLeft == 0) {
    clearInterval(interval)
    process.exit();
  }

}, 1000)
