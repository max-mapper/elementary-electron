var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var mdrender = require('../../markdown-render.js')

module.exports = function () {
  var problem = {}
  problem.problem = mdrender(fs.readFileSync(path.join(__dirname, 'problem.md')).toString()) + '\n'
  problem.solution = 'Run "elementary-electron" again to select the next challenge.\n'

  problem.verify = function (args, cb) {
    try {
      fs.statSync(path.join(process.cwd(), 'index.js'))
      fs.statSync(path.join(process.cwd(), 'node_modules', 'cat-picture'))
      var pkg = require(path.join(process.cwd(), 'package.json'))
      if (Object.keys(pkg.dependencies).indexOf('cat-picture') === -1) throw new Error('missing dep')
    } catch (err) {
      console.error('\nFailed to find index.js, package.json with cat-picture in dependencies and the folder ./node_modules/cat_picture')
      return cb(false)
    }
    cb(true)
  }

  problem.pass = '\n' + chalk.green('SUCCESS!') + ' Your app folder looks good.'
  problem.fail = '\n' + chalk.red('FAIL!') + ' Your app folder is missing some things!'
  problem.run = function (args) {
    console.error('Run is not necessary in this challenge')
  }
  return problem
}
