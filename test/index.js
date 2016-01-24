var test = require('tape'),
  cp = require('child_process')

test('timer', function (t) {
  t.plan(2)
  child = cp.fork('timer', ['1s'])

  child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
    t.equal(data, 'Left: 4s\n')
    child.kill()
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
  })

})
