function timer(time) {
  var seconds = 0
  var minutes = 0

  if (time.charAt(time.length -1) === 's') {
    seconds = parseInt(time.slice(0, -1))
  } else {
    minutes = parseInt(time.slice(0, -3))
    seconds += (minutes * 60)
  }

  setInterval(function() {
    if (seconds > 1) {
      seconds -= 1
      console.log('Left: ' + seconds + 's')
    } else if (seconds === 1) {
      seconds -= 1
      console.log('Beep! Beep! Beep!')
    } else {
      process.exit()
    }
  }, 1000)

}


timer(process.argv[2])
