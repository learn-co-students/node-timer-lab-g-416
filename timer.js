let argv = process.argv

if (!argv[2] || argv[2].slice(-1) !== "s" && argv[2].slice(-3) !== "min") {
	console.log('Please enter how many seconds e.g., 5s for 5 seconds or 1min for 1 minute')
	process.exit(1)
}

let timeLeft = argv[2].slice(-1) === "s" ? parseInt(argv[2].slice(0, -1), 10) : parseInt(argv[2].slice(0, -3), 10) * 60

let interval = setInterval(() => {
	timeLeft --
  	console.log(`Left: ${timeLeft}s`)	
  	if (timeLeft === 0) {
  		clearInterval(interval);
  		process.exit(0);
  	}
}, 1000)

