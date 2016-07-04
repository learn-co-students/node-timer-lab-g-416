function timer(time){
  if (time.includes("min")){
    time = parseInt(time.slice(0, -3)) * 60;
  }
  else if (time.includes("s")){
    time = parseInt(time.slice(0,-1));
  }
  else{
    process.exit();
  }

  var timeInterval = setInterval(function(){
      if (time === 0){
        process.exit();
      }
      time--;
      timerCountdown(time);
  }, 1000);

  function timerCountdown(currentTime){
    console.log(`Left: ${currentTime}s`);
  }
}

timer(process.argv[2]);