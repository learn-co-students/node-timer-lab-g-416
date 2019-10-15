let time = process.argv[2]
let units 
 
if (!!time.match(/min/)) {
    units = 'min'
    time = time.substr(0, time.length-3)
} else if (!!time.match(/s/)) {
    units = 's'
    time = time.substr(0, time.length-1)
} else {
    process.exit(1)
}

time = parseInt(time)

if (units === "min") {
    time *= 60
}

let interval = setInterval(() => {
    time-- 
    console.log(`Left: ${time}s`)
    if (time === 0) {
        clearInterval(interval)
        process.exit(0)
    }
}, 1000)