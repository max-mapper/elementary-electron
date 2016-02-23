var fs = require('fs')
var path = require('path')
var which = require('which')
var chalk = require('chalk')
var mdrender = require('../../markdown-render.js')

module.exports = function () {
  var problem = {}
  problem.problem = mdrender(fs.readFileSync(path.join(__dirname, 'problem.md')).toString()) + '\n'
  problem.solution = 'When you type "electron myapp.js" it should start the Welcome to Electron application.\n\nRun "elementary-electron" again to select the next challenge.\n'

  problem.verify = function (args, cb) {
    try {
      var index = fs.statSync(path.join(process.cwd(), 'index.html'))
      var app = fs.statSync(path.join(process.cwd(), 'myapp.js'))
    } catch (err) {
      console.error('\nFailed to find index.html and myapp.js.')
      return cb(false)
    }
    cb(true)
  }

  problem.pass = '\n' + chalk.green('SUCCESS!') + ' Your app looks good. Run elementary-electron again to select the next challenge'
  problem.fail = '\n' + chalk.red('FAIL!') + ' Your app has some issues.'
  problem.run = function (args) {
    console.error('Run is not necessary in this challenge')
  }
  return problem
}
