if (!process.argv[2]) {
    console.log('You need to enter a time.')
    process.exit(1);
}
var countdown = parseInt(process.argv[2]);

if (process.argv[2].includes('min')) {
    countdown = countdown * 60
}

var timer = setInterval(function(){
      countdown -= 1;
      console.log(`Left: ${countdown}s`)
      if (countdown < 1){
          clearInterval(timer);
          console.log("Beep beep!");
          process.exit(0);
      }
    }, 1000);
