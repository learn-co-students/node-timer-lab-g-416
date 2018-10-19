let timeLeft = 0;
const argv = process.argv;

if (!argv[2]) {
  process.exit(1)
} else if (argv[2].includes('s')){
  timeLeft = parseInt(argv[2].slice(0, -1))
} else if (argv[2].includes('min')) {
  timeLeft = parseInt(argv[2].slice(0, -3)) * 60
} else {
  process.exit(1)
}

setInterval(() => {
  timeLeft --
  console.log(`Left: ${timeLeft}s`)
  if (timeLeft === 0) {
    clearInterval()
    process.exit(0)
  }
}, 1000)
