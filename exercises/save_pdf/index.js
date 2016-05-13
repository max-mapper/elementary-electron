var fs = require('fs')
var path = require('path')
var chalk = require('chalk')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.md')}
  problem.solution = 'That was the last challenge!\nFor more Electron ideas check out https://github.com/sindresorhus/awesome-electron\nFor more workshops like this check out http://nodeschool.io\n'

  problem.verify = function (args, cb) {
    try {
      fs.statSync(path.join(process.cwd(), 'annotation.pdf'))
    } catch (err) {
      console.error('\nFailed to find annotation.pdf')
      return cb(false)
    }
    cb(true)
  }

  problem.pass = '\n' + chalk.green('SUCCESS!') + ' You did it!'
  problem.fail = '\n' + chalk.red('FAIL!') + ' Your app has some issues.'
  problem.run = function (args) {
    console.error('Run is not necessary in this challenge')
  }
  return problem
}
