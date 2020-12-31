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