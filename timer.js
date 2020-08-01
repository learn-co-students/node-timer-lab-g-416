// reset the first 2 variables using process.argv.shift()
// set initial variable
// create countdown loop
// create switch for s and min

process.argv.shift()
process.argv.shift()

// create variable for time
// build function to intake user input
// function converts input to integer
// countdown loop counts down to zero
// switch case that that deciphers s and min

let i = process.argv[0].charAt(0)

let interval = process.argv[0].substring(1)

switch(interval) {
    case "s":
        i = i * 1000
        break
    case "min":
        i = i * 60 * 1000

}

let count = setInterval(() => {
    i -= 1000
    console.log(`Left: ${i/1000}s`)
    if (i <= 0) {
        clearInterval(count)
    }
}, 1000)


// charAt = method that returns the character at the specified index in a string
// substring = method extracts characters from a string, between two specified indices, and returns the new sub string
//substring extracts the characters in a string between "start" and "end", not including "end"

// SOLUTION ANSWER

var timeLeft = 0
var argv = process.argv
if (!argv[2]) {
  console.log('Please provide an argument, e.g., 5s or 1min.')
  process.exit(1)
} else if (argv[2].indexOf('s')>-1) {
  timeLeft = parseInt(argv[2].slice(0, -1), 10)
} else if (argv[2].indexOf('min')>-1) {
  timeLeft = parseInt(argv[2].slice(0, -3), 10) * 60
} else {
  console.log('Please provide a valid argument, e.g., 5s or 1min.')
  process.exit(1)
}

var interval = setInterval(()=>{
  timeLeft --
  console.log(`Left: ${timeLeft}s`)
  if (timeLeft == 0) {
    clearInterval(interval)
    process.exit(0)
  }
}, 1000)
