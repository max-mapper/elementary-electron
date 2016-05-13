var chalk = require('chalk')
var path = require('path')
var fs = require('fs')

module.exports = function appendFileCheck (file) {
  return function (messages) {
    try {
      fs.statSync(path.join(process.cwd(), file))
    } catch (err) {
      messages.push('  - ' + chalk.red(file) + ' [?]')
      return 0
    }
    messages.push('  - ' + chalk.green(file) + ' ✔')
    return 1
  }
}
