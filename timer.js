var time = parseTime(process.argv[2])



function parseTime(string) {
    var indicator = string.charAt(string.length - 1)
    if (indicator == "s") {
        return parseInt(string.substring(0, string.length-1), 10)
    } else if (indicator == "n"){
        return parseInt(string.substring(0, string.length-1), 10) * 60
    } else {
        console.log("Please pass in the arguments in the following format: 5s or 3min")
        process.exit()
    }
    
}

setInterval(function(){
    time--
    console.log("Left: " + time + "s")
    if(time <= 0){
        process.exit()
    }
}, 1000)

