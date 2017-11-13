var argv = process.argv
var timer = 0

if (!argv[2]) {
	console.log('Please add an arg')
	process.exit(1)
} else if (argv[2].indexOf('s') > -1) {
	timer = parseInt(argv[2].slice(0, -1), 10)
} else if (argv[2].indexOf('min') > -1) {
	timer = parseInt(argv[2].slice(0, -3), 10) * 60
} else {
	console.log('Please enter a valid argument')
	process.exit(1)
}

var interval = setInterval(() => {
	timer --
	console.log(`Left: ${timer}s`)
	if (timer == 0) {
		console.log("Done!")
		clearInterval()
		process.exit(0)
	}
}, 1000)





