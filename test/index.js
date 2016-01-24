var test = require('tape'),
  cp = require('child_process')

test('timer on 5s', function (t) {
  t.plan(2)
  child = cp.spawn('node', ['timer', '5s'])
  child.stdout.on('data', (data) => {
    data = data.toString('utf8')
    console.log(`stdout: ${data}`)
    t.equal(data, 'Left: 4s\n')
    child.kill()
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    t.equal(code, null)
  })
})

test('timer on 1min', function (t) {
  t.plan(2)
  child = cp.spawn('node', ['timer', '1min'])
  child.stdout.on('data', (data) => {
    data = data.toString('utf8')
    console.log(`stdout: ${data}`)
    t.equal(data, 'Left: 59s\n')
    child.kill()
  })

  child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`)
  })

  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`)
    t.equal(code, null)
  })
})
