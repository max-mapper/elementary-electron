var fs = require('fs')
var path = require('path')
var chalk = require('chalk')
var checkAll = require('../../lib/checkAll.js')
var cheerio = require('cheerio')
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
          messages.push('  - ' + chalk.red(htmlPath) + ' [cant read]')
          return 0
        }
        var $
        try {
          $ = cheerio.load(html)
        } catch (e) {
          console.log(e)
          messages.push('  - ' + chalk.red(htmlPath) + ' [broken html]')
          return 0
        }
        var script = $('script')
        if (script.length === 0) {
          messages.push('  - ' + chalk.red(htmlPath) + ' [missing script tag]')
          return 0
        }
        var body = $('body')
        if (body.length === 0) {
          messages.push('  - ' + chalk.red(htmlPath) + ' [missing body tag]')
          return 0
        }
        debugger
        if (!$.contains(body[0], script[0])) {
          messages.push('  - ' + chalk.red(htmlPath) + ' [script not in body]')
          return 0
        }
        messages.push('  - ' + chalk.green(htmlPath) + ' ✔')
        return 1
      }
    ], 'Your app folder looks good.', 'Your app folder is missing some things!', cb)
  }
  return problem
}
