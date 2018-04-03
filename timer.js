
const timer = (time) => {
    let amount = parseInt(time[0])
    debugger
    let interval = 1000
    if(time[1] === 'm'){
         amount *= 60

    } 

    let counter = amount

    const intervalId = setInterval(() => {
        


        console.log(`Left: ${--counter}s`)
        
        if (counter === 0){
            //clearInterval(intervalId)
            process.exit()
        }},
        interval
    )

}

timer(process.argv[2])
