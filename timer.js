var timer = function timer(n){
    // var timeRemaining = n
    // console.log(`Left: ${timeRemaining}s`)
    countDown(n - 1)
}

let countDown = (n) => {
    if(n >= 0){
        setTimeout(() => {
            console.log(`Left: ${n}s`)
            countDown(n - 1)
        }, 1000);
    }else{
        console.log("Timer Expired")
        process.exit()
    }
}

var inputTime = 0

if(process.argv[2]){
    if(process.argv[2].split("").slice(process.argv[2].split("").length - 1).join("") === 'n'){
        inputTime = parseInt(process.argv[2], 10) * 60
    }else if(process.argv[2].split("").slice(process.argv[2].split("").length - 1).join("") === 's'){
        inputTime = parseInt(process.argv[2], 10)
    }else{
        console.log("Please enter Seconds (s) or Minutes (min)")
    }
    
}

timer(inputTime)



module.exports = timer