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
      fsCheck(path.join('.', 'annotation.pdf')),
    ], 'You did it!\n\n' + 'For more Electron ideas check out https://github.com/sindresorhus/awesome-electron\nFor more workshops like this check out http://nodeschool.io\n', 'Your app has some issues.', cb)
  }
  
  return problem
}
