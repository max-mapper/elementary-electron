var fs = require('fs')
var path = require('path')
var which = require('which')
var ansimd = require('ansimd')
var chalk = require('chalk')

module.exports = function () {
  var problem = {}
  problem.problem = ansimd(fs.readFileSync(path.join(__dirname, 'problem.md')).toString()) + '\n'
  problem.solution = 'When you type "electron" it should start the Welcome to Electron application.\n'

  problem.verify = function (args, cb) {
    which('electron', function (err, resolvedPath) {
      if (err) {
        console.error('Failed to find the command "electron" in your PATH.')
        return cb(err)
      }
      cb(true)
    })
  }

  problem.pass = '\n' + chalk.green('SUCCESS!') + ' Found electron in your PATH.'
  problem.failed = '\n' + chalk.red('FAIL!') + ' Did not find electron in your PATH.'
  problem.run = function (args) {}
  
  return problem
}
