if (!process.argv[2]) {
  console.log('Please enter a time.')
  process.exit(1);
}
let countdown = parseInt(process.argv[2])
if (process.argv[2].includes('min')) {
  countdown *= 60
}
let timer = setInterval(function() {
  countdown -= 1;
  console.log(`Left: ${countdown}s`)
  if (countdown < 1) {
    clearInterval(timer);
    console.log("Blast off!")
    process.exit(0)
  }
}, 1000);
