var fs = require('fs')
var path = require('path')
var which = require('which')
var chalk = require('chalk')
var mdrender = require('../../markdown-render.js')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = mdrender(fs.readFileSync(path.join(__dirname, 'problem.md')).toString()) + '\n'
  problem.solution = 'When you type "electron" it should start the Welcome to Electron application.\n\nRun "elementary-electron" again to select the next challenge.\n'

  problem.verify = function (args, cb) {
    which('electron', function (err, resolvedPath) {
      if (err) {
        console.error('Failed to find the command "electron" in your PATH.')
        return cb(false)
      }
      cb(true)
    })
  }

  problem.pass = '\n' + chalk.green('SUCCESS!') + ' Found electron in your PATH.'
  problem.failed = '\n' + chalk.red('FAIL!') + ' Did not find electron in your PATH.'
  problem.run = function (args) {
    console.error('Run is not necessary in this challenge')
  }
  return problem
}
