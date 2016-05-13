#!/usr/bin/env node

var adventure = require('workshopper-adventure')
var shop = adventure({
  appDir: __dirname
})

var problems = [
  'Installing',
  'Hello World',
  'Cat Picture',
  'Cat Annotation',
  'Save PDF'
]

problems.forEach(function (prob) {
  shop.add(prob, function () {
    var problemPath = './exercises/' + prob.replace(/\s/ig, '_').toLowerCase()
    return require(problemPath)()
  })
})

module.exports = shop
