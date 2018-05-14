sec = process.argv[2]

if (sec.split("").includes("s")) {
  global.setInterval(timer(sec));
} else {
  global.setInterval(timeMin(sec));
}


function timer(sec) {
  for (let i = parseInt(sec) - 1; i >= 0; i--) {
    console.log(`Left: ${i}s`)
  }
}

function timeMin(sec) {
  seconds = parseInt(sec) * 60
  for (let i = seconds - 1; i >= 0; i--) {
    console.log(`Left: ${i}s`)
  }
}
