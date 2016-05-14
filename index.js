#!/usr/bin/env node

var adventure = require('workshopper-adventure')
var shop = adventure({
  appDir: __dirname,
  languages: ['en']
})

shop.addAll([
  'Installing',
  'Hello World',
  'Cat Picture',
  'Cat Annotation',
  'Save PDF'
])

module.exports = shop
