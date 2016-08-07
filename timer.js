var seconds

if (process.argv[2].slice(-3) == 'min') {
  seconds = parseInt(process.argv[2].slice(0, -3) * 60)
} else if (process.argv[2].slice(-1) == 's') {
  seconds = parseInt(process.argv[2].slice(0, -1))
} else {
  console.log('Please provide a valid time.')
  process.exit()
}

setInterval(function(){
  console.log('Left: ' + (seconds - 1) + 's')
  seconds -= 1
  if (seconds == 0) { process.exit() }
}, 1000)
