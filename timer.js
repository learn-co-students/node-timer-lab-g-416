function timer(ns) {
  var seconds = 0
  var minutes = 0

  if (ns.charAt(ns.length -1) === 's') {
    seconds = parseInt(ns.slice(0, -1))
  } else {
    minutes = parseInt(ns.slice(0, -3))
    seconds += (minutes * 60)
  }

  setInterval(function() {
    if (seconds >= 1) {
      seconds -= 1
      console.log('Left: ' + seconds + 's')
    } else {
      process.exit()
    }
  }, 1000)

}


timer(process.argv[2])
