let timeleft = 0
let input = process.argv

if (!input[2]) {
  console.log("Please enter some time")
  process.exit(1)
} else if (input[2].indexOf('s')>-1) {
  timeleft = parseInt(input[2].slice(0,-1),10)
} else if (input[2].indexOf('min')>-1) {
  timeleft = parseInt(input[2].slice(0,-3),10)*60
} else {
  console.log("Please enter a valid time")
  process.exit(1)
}

let interval = setInterval(()=> {
  timeleft --
  console.log(`Left: ${timeleft}s`)

  if (timeleft == 0) {
    clearInterval(interval)
    process.exit(0)
  }
},1000)
