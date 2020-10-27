function timer (time) {
    let num;
    if (time.includes('s')) {
        num = parseInt(time.split('s')[0]);
    } else if (time.includes('min')) {
        num = parseInt(time.split('m')[0]) * 60;
    }
    
    while (num > 0) {
        num -= 1;
        setInterval(logTimeLeft(num), 1000);
    }
}

function logTimeLeft(num) {
    console.log(`Left: ${num}s`)
}

let time;
if (process.argv[2]) {
    time = process.argv[2]
} else {
    console.log('Please add a time argument');
    process.exit(1);
}

timer(time);
process.exit(0);