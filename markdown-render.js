var ansimd = require('ansimd')

// monkeypatch
ansimd.renderer.code = function (text) {
  return '\n' + bold(text) + '\n'
}

function bold (str) {
  return '\033[1m' + str + '\033[0m'
}

module.exports = ansimd
