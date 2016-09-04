var path = require('path')
var chalk = require('chalk')
var checkAll = require('../../lib/checkAll.js')
var cheerio = require('cheerio')
var fs = require('fs')
var fsCheck = require('../../lib/fsCheck.js')
var pkgDependencyCheck = require('../../lib/pkgDependencyCheck.js')

module.exports = function () {
  var problem = {}
  problem.requireSubmission = false
  problem.problem = {file: path.join(__dirname, 'problem.{lang}.md')}
  problem.verify = function (args, cb) {
    var htmlPath = 'index.html'

    checkAll([
      fsCheck(htmlPath),
      fsCheck('index.js'),
      fsCheck(path.join('node_modules', 'cat-picture')),
      pkgDependencyCheck('cat-picture'),
      function (messages) {
        var html
        try {
          html = fs.readFileSync(htmlPath, 'utf-8')
        } catch (e) {
          console.log(e)
          messages.push('  - ' + chalk.red(htmlPath) + ' [{{exercise.cat_picture.cant_read}}]')
          return 0
        }
        var $
        try {
          $ = cheerio.load(html)
        } catch (e) {
          console.log(e)
          messages.push('  - ' + chalk.red(htmlPath) + ' [{{exercise.cat_picture.invalid_html}}]')
          return 0
        }
        var script = $('script')
        if (script.length === 0) {
          messages.push('  - ' + chalk.red(htmlPath) + ' [{{exercise.cat_picture.missing_script_tag}}]')
          return 0
        }
        var body = $('body')
        if (body.length === 0) {
          messages.push('  - ' + chalk.red(htmlPath) + ' [{{exercise.cat_picture.missing_body_tag}}]')
          return 0
        }
        if (!$.contains(body[0], script[0])) {
          messages.push('  - ' + chalk.red(htmlPath) + ' [{{exercise.cat_picture.script_not_in_body}}]')
          return 0
        }
        messages.push('  - ' + chalk.green(htmlPath) + ' ✔')
        return 1
      }
    ], '{{exercise.cat_picture.fail}}', '{{exercise.cat_picture.fail}}', cb)
  }
  return problem
}
