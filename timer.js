// const process = require('process');
// let splitString = process.argv[2].split('s')
// let timeLeft = parseInt(splitString[0],10)

// function startTimer() {
//   if (timeLeft > 0) {
//     timeLeft -= 1 ;
//     console.log(`Left: ${timeLeft}` + 's');
//   }
// }

// setInterval(startTimer, 1000);


let count;
process.argv[2].includes("min") ? count = (parseInt(process.argv[2]) * 60) -1 : count = parseInt(process.argv[2]) -1;

const countDown = global.setInterval(() => {
    count === 0 && global.clearInterval(countDown) && process.exit(0);
    if(!process.argv[2].includes("min")){
        console.log(`Left: ${count--}s`)
    } else {
        console.log(`Left: ${count--}s`)
    }
}, 1000);