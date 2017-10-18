var timeArg = process.argv[2],
	remainingTime;

var doError = () => {
	console.log("Please supply a nonzero time interval as an argument. E.g. '1s' or '2min'.");
	process.exit(1);
};

var printRemainingTime = () => {
	console.log('Left: %ss', remainingTime);
};

if (timeArg === undefined) {
	doError();
}

if (timeArg.slice(timeArg.length - 1, timeArg.length).toLowerCase() === 's') {
	remainingTime = parseInt(timeArg.slice(0, timeArg.length - 1), 10);
} else if (timeArg.slice(timeArg.length - 3, timeArg.length).toLowerCase() === 'min') {
	remainingTime = parseInt(timeArg.slice(0, timeArg.length - 3), 10) * 60;
} else {
	doError();
}

if (isNaN(remainingTime) || remainingTime === 0) {
	doError();
}

//printRemainingTime();

var interval = setInterval(() => {
	remainingTime--;
	printRemainingTime();
	if (remainingTime == 0) {
		clearInterval(interval);
		process.exit(0);
	}
}, 1000);