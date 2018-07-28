let time = process.argv[2]

if (time.includes("min")) {
  time = parseInt(time) * 60 - 1
} else {
  time = parseInt(time) - 1
}



setInterval(function() {
    if (time >= 0) {
      console.log(`Left: ${time}s`)
      time -= 1
    } else {
      clearInterval(this)
    }
  }, 1000
)
