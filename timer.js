let time = process.argv[2];
let loop;

let printTime = () => {
  if(time === 0){
    console.log("BOOM!")
    global.clearInterval(loop)
    process.exit(0)
  }
  time--;
  console.log(`Left: ${time}s`);
}

if(time[time.length-1] === "s"){
  time = parseInt(time.slice(0, time.length-1))
  loop = global.setInterval(printTime,1000)
}
else if(time.slice(time.length-3, time.length) === "min"){
  time = parseInt(time.slice(0, time.length-3))*60
  loop = global.setInterval(printTime,1000)
}
else {
  console.log("NOPE");
  process.exit(0);
}
