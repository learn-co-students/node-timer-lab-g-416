process.argv.shift();
process.argv.shift();
const input = process.argv[0];

function standardizeInput(input) {
  if(input[input.length - 1] === "s") {
    return parseInt(input.slice(0, -1));
  } else if(input[input.length - 1] === "n") {
    return parseInt(input.slice(0, -3)) * 60
  }
}

let duration = standardizeInput(input);

setInterval(() => {
  duration -= 1;
  console.log(`Left: ${duration}s`);
  duration -= 1;
  if(duration === 0) {
    process.exit();
  }
}, 1000);
