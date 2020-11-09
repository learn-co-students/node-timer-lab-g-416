process.argv.shift()
process.argv.shift()

let number = parseInt(process.argv, 10)
let minutes = parseInt(process.argv, 10) * 60

function intervalFunc() {
  if (number === 0) {
    process.exit()
  } else if ( process.argv.join("")[1] === 'm') {
    minutes = minutes -1
    console.log(`Left: ${minutes}s`)

  } else {
    number = number - 1
    console.log(`Left: ${number}s`)
  }
}

global.setInterval(intervalFunc, 500);