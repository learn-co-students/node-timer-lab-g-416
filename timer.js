if (!process.argv[2]) {
    console.log(
        "Must provide time argument in either __s format for seconds or __min for minutes"
    );
    process.exit(1);
}

let time = process.argv[2];
let parsedTime = parseFloat(time);

if (time[time.length - 1] === "s") {
    let interval = setInterval(() => {
        parsedTime--;
        console.log(`Left: ${parsedTime}s`);
        if (parsedTime === 0) {
            clearInterval(interval);
            process.exit(0);
        }
    }, 1000);
} else if (time.substring(time.length - 3) === "min") {
    let seconds = parsedTime * 60;
    let interval = setInterval(() => {
        seconds--;
        console.log(`Left: ${seconds}s`);
        if (seconds === 0) {
            clearInterval(interval);
            process.exit(0);
        }
    }, 1000);
} else {
    console.log(
        "Must provide time argument in either __s format for seconds or __min for minutes"
    );
    process.exit(1);
}
