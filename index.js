#!/usr/bin/env node

var elementaryElectron = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en', 'ja']
})

elementaryElectron.addAll([
  'Installing',
  'Hello World',
  'Cat Picture',
  'Cat Annotation',
  'Save PDF'
])

module.exports = elementaryElectron
