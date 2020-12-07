process.argv.shift();
process.argv.shift();

let num;

if (process.argv[0].slice(-3) === "min") {
    num = 60000 * parseInt(process.argv[0].slice(0, -3)) / 1000;
} else if (process.argv[0].slice(-1) === "s") {
    num = parseInt(process.argv[0].slice(0,-1));
} else {
    console.log('Wrong argument');
    process.exit(1);
}

let interVal = setInterval(() => {
    num -= 1;
    console.log(`Left: ${num}s`);
    if (num <= 0) {
        clearInterval(interVal);
        process.exit(0);
    }
}, 1000);
