/**
 * jstransformer-css <https://github.com/jstransformers/jstransformer-css>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var css = require('css');

exports.name = 'css';
exports.outputFormat = 'json';

exports.render = function (str, opts) {
  return JSON.stringify(css.parse(str, opts));
};
