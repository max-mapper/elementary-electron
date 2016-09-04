var path = require('path')
var checkAll = require('../../lib/checkAll.js')
var fsCheck = require('../../lib/fsCheck.js')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.{lang}.md')}

  problem.verify = function (args, cb) {
    checkAll([
      fsCheck(path.join('.', 'annotation.pdf'))
    ], '{{exercise.save_pdf.success}}', '{{exercise.save_pdf.success}}', cb)
  }

  return problem
}
