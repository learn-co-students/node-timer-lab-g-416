process.argv.shift()
process.argv.shift()

const timeString = process.argv[0]
const unitsIndex = timeString.search(/[a-zA-Z]/)
var time = parseInt(timeString.slice(0, unitsIndex))
let units = timeString.slice(unitsIndex)

if (units[0] === 'm') {
  time = time*60
} else if (units[0] === 'h'){
  time = time*60*60
}

const interval = setInterval(() => {
  time -= 1
  console.log('Left: ' + time + 's')
  if (time === 0) {clearInterval(interval)}
}, 1000);
