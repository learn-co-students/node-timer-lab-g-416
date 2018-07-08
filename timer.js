const timeString = process.argv[2]
const unitsIndex = timeString.search(/[a-zA-Z]/)
var time = parseInt(timeString.slice(0, unitsIndex))
let units = timeString.slice(unitsIndex)

if (units[0] === 's'){
  time = time
}else if(units[0] === 'm') {
  time = time*60
} else if (units[0] === 'h'){
  time = time*60*60
} else {
  console.log('Please provide a valid argument, e.g., 5s or 1min.')
  process.exit(1)
}

const interval = setInterval(() => {
  time -= 1
  console.log('Left: ' + time + 's')
  if (time === 0) {
    clearInterval(interval)
    process.exit(0)
  }
}, 1000);
