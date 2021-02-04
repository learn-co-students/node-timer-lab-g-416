process.argv.shift()
process.argv.shift()

let time = process.argv[0]
let timeLeft
if (time.indexOf('s') > -1) {
    timeLeft = parseInt(time.split("s")[0])
}
else if (time.indexOf('min') > -1) {
    timeLeft = parseInt(time.slice(0, -3), 10) * 60
}
let interval = setInterval(() => {
    timeLeft --
    console.log(`Left: ${timeLeft}s`)
    if (timeLeft === 0) {
        clearInterval(interval)
        process.exit(0)
    }
}, 1000)