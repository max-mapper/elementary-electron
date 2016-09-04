var chalk = require('chalk')

module.exports = function (checks, success, error, cb) {
  var messages = ['Checking Requirements:']
  var total = checks.length
  var ok = 0
  messages.push('')
  for (var i = 0; i < checks.length; i++) {
    var check = checks[i]
    ok += check(messages)
  }
  messages.push('')
  if (ok === total) {
    messages.push(chalk.green('{{ee.success}}') + '\n\n' + success)
  } else {
    messages.push(chalk.red('{{ee.fail}}') + '\n\n' + error)
  }
  messages.push('')
  cb(null, ok === total, messages.join('\n'))
}
