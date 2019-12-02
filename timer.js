let argv = process.argv
data = argv[2].slice(0, -1)
time=  parseInt(data)
if (argv[2].indexOf('min')>-1) {
  time = parseInt(argv[2].slice(0, -3), 10) * 60}
let interval =setInterval( () => {
  time--
  console.log(`Left: ${time}s`)
  if (time === 0) {
  clearInterval(interval)
    process.exit()
  }
},1000);
