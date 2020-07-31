// reset the first 2 variables using process.argv.shift()
// set initial variable
// create countdown loop
// create switch for s and min

process.argv.shift()
process.argv.shift()

// create initial variable
// variable equals parsing funciton that passes in user argv
const time = parseTime(process.argv[0])

function parseTime(string) {
    //create variable that subtracts given number to find 's' or 'n'
    let indicator = string.charAt(string.length - 1)
    if (indicator == "s") {
        return parseInt(string.substr(0, string.length-1), 10)
    } else if (indicator == 'n') {
        return parseInt(string.substr(0, string.length-1), 10) * 60
    } else {
        console.log("Please pass in the arguments in the following format: 5s or 3min")
        process.exit()
    }
}

setInterval(function() {
    time--
    console.log("Left: " + time + "s")
    if (time <= 0) {
        process.exit()
    }
}, 1000)