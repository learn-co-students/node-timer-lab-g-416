function timer(timeLeft){
    // console.log(`Left: ${timeLeft}s`)
    setInterval(function(){
      timeLeft --;
      debugger;
      console.log(`Left: ${timeLeft}s`);
      if (timeLeft==0){
        clearInterval()
        process.exit(0)
      }
    }, 1000)
}
    

var numberUnits = process.argv[2]

if (numberUnits.charAt(numberUnits.length-1) == 's'){
    var timeLeft = parseInt(numberUnits.substring(0,(numberUnits.length-1)), 10);
} else {
    var timeLeft = parseInt(numberUnits.substring(0,(numberUnits.length-3)), 10) * 60;
}

timer(timeLeft)

