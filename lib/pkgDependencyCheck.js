var chalk = require('chalk')
var path = require('path')

module.exports = function appendDependencyCheck (pkgName) {
  return function (messages) {
    try {
      var pkg = require(path.join(process.cwd(), 'package.json'))
    } catch (e) {
      messages.push(chalk.red('  - No package.json!!!'))
      return 0
    }
    if (Object.keys(pkg.dependencies).indexOf(pkgName) === -1) {
      messages.push('  - Dependency in package.json: ' + chalk.red(pkgName) + ' [?]')
      return 0
    }
    messages.push('  - Dependency in package.json: ' + chalk.green(pkgName) + ' ✔')
    return 1
  }
}
