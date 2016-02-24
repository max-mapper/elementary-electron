#!/usr/bin/env node

var adventure = require('adventure')
var shop = adventure('elementary-electron')

var problems = [
  'Installing',
  'Hello World',
  'Cat Picture',
  'Cat Annotation'
]

problems.forEach(function (prob) {
  shop.add(prob, function () {
    var problemPath = './problems/' + prob.replace(/\s/ig, '_').toLowerCase()
    return require(problemPath)()
  })
})

shop.execute(process.argv.slice(2))
