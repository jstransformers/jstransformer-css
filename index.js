'use strict'

var css = require('css')

exports.name = 'css'
exports.outputFormat = 'json'

exports.render = function (str, opts) {
  return JSON.stringify(css.parse(str, opts))
}
