var ansimd = require('ansimd')

// monkeypatch
ansimd.renderer.code = ansimd.renderer.paragraph

module.exports = ansimd