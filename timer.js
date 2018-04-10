let ns;
let setInt;

if (process.argv[2]) {
  ns = parseInt(process.argv[2], 10);

  if (process.argv[2].includes('min')) {
    ns *= 60;
  }
} else {
  process.exit(1)
}

function timer() {
  if (ns > 0) {
    ns--;
    console.log(`Left: ${ns}s`);
    setInt = global.setInterval(() => timer(), 1000);
  } else {
    global.clearInterval(setInt);
    process.exit()
  }
}

timer();