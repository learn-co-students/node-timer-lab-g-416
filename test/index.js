var expect = require('chai').expect
var path = require('path')
var cp = require('child_process')

describe('"$ node timer 5s" command', function () {
  it('must say that 4s left', function(done){
    timer = cp.spawn('node', ['timer', '5s'])
    timer.stdout.on('data', (data) => {
      expect(data.toString('utf8')).to.equal('Left: 4s\n')
      timer.kill()
      done()
    })
  })
})
describe('"$ node timer 1min" command', function () {
  it('must say that 59s left', function(done){
    timer = cp.spawn('node', ['timer', '1min'])
    timer.stdout.on('data', (data) => {
      expect(data.toString('utf8')).to.equal('Left: 59s\n')
      timer.kill()
      done()
    })
  })
})