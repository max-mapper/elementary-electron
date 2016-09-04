var path = require('path')
var checkAll = require('../../lib/checkAll.js')
var fsCheck = require('../../lib/fsCheck.js')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.{lang}.md')}
  problem.verify = function (args, cb) {
    checkAll([
      fsCheck(path.join('.', 'index.js')),
      fsCheck(path.join('.', 'node_modules', 'cat-picture')),
      fsCheck(path.join('.', 'node_modules', 'lightning-image-poly'))
    ], '', '{{exercise.cat_annotation.fail}}', cb)
  }
  return problem
}
