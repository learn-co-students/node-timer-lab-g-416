process.argv.shift()
process.argv.shift()
var input = process.argv[0]
var arr = input.split("")
var num = parseInt(arr[0])
var denom;
var interval;

if (arr[1] == "s") {
  num--
  interval = setInterval(countdown, 1000) 
} else if (arr[1] == "m") {
  num = 59
  interval = setInterval(countdown, 1000) 
} else {
  process.exit(1)
}

function countdown(){
  console.log("Left: " + num + "s")
  num--
  if (num == 0) {
  clearInterval(interval)
   process.exit(0)
  }
}



