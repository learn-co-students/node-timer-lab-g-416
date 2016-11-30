var time = process.argv[2]

if (time.slice(-1) === 'n') {
  time = parseInt(time.slice(0, -3)) * 60
} else {
  time = parseInt(time.slice(0, -1))
}

var interval = setInterval(()=>{
  time--
  console.log(`Left: ${time}s`)
  if (time == 0){
    clearInterval(interval)
    process.exit(0)
  }
}, 1000)
