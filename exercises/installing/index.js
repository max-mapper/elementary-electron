var path = require('path')
var which = require('which')
var chalk = require('chalk')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.{lang}.md')}

  problem.verify = function (args, cb) {
    which('electron', function (err, resolvedPath) {
      if (err) {
        return cb(null, false, chalk.green('{{ee.fail}}') + ' Failed to find the command "electron" in your PATH.')
      }
      cb(null, true, chalk.green('{{ee.success}}') + ' Found electron in your PATH.')
    })
  }
  return problem
}
