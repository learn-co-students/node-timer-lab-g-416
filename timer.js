var totalTime = process.argv[2];

if (totalTime.slice(-1) === 's') {
  totalTime = parseInt(totalTime); // input is already seconds; convert to integer
}
else {
  totalTime = parseInt(totalTime) * 60; // convert minutes input to seconds integer
}

var countdown = setInterval(function () {
  totalTime -= 1;
  console.log("Left: " + totalTime + "s");
  if (totalTime === 0) clearInterval(countdown);
}, 1000);

