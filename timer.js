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
    console.log('Left: ${i/1000}s')
    if (i <= 0) {
        clearInterval(count)
    }
}, 1000)


// charAt = method that returns the character at the specified index in a string
// substring = method extracts characters from a string, between two specified indices, and returns the new sub string
//substring extracts the characters in a string between "start" and "end", not including "end"
