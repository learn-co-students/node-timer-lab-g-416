process.argv.shift()
process.argv.shift()

let i = process.argv[0].charAt(0)
let interval = process.argv[0].substring(1)

switch(interval) {
    case "s":
        i = i * 1000
        break
    case "min":
        i = i * 60 * 1000
}

let count = setInterval(() => {
    i -= 1000
    console.log(`Left: ${i/1000}s`)
    if(i <= 0) {
        clearInterval(count)
    }
}, 1000)