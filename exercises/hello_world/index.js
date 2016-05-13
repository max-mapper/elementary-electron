var fs = require('fs')
var path = require('path')
var checkAll = require('../../lib/checkAll.js')
var fsCheck = require('../../lib/fsCheck.js')
var pkgDependencyCheck = require('../../lib/pkgDependencyCheck.js')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.{lang}.md')}

  problem.verify = function (args, cb) {
    checkAll([
      fsCheck(path.join('.', 'index.js')),
      fsCheck(path.join('.', 'app.js'))
    ], 'Your app looks good.\n\nWhen you type `electron app.js` it should start the Welcome to Electron application.', 'Your app has some issues.', cb)
  }
  return problem
}
