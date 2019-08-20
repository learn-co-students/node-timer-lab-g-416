timeRemaining = process.argv[2]

const setTimer = timeRemaining => {
  let time = parseInt(timeRemaining.match(/[0-9]+/)[0])
  const denomination = timeRemaining.match(/[a-z]{1,3}/)[0]

  if (typeof time!=='number' || typeof denomination!=='string') process.exit()
  let seconds = denomination === 'min' ? time *= 60 : time
  
  const display = seconds => {
    const t = seconds >= 60 ? seconds/60 : seconds
    const d = seconds >= 60 ? 'min' : 's'

    console.log(`Left: ${t}${d}`)
  }
  const countdown = () => {
    display(--seconds)
    if (seconds === 0) {
      clearInterval(t)
      process.exit()
    }
  }
  const t = setInterval(countdown, 1000)
}

setTimer(timeRemaining)