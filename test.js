/**
 * jstransformer-css <https://github.com/jstransformers/jstransformer-css>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var fs = require('fs');
var css = require('css');
var test = require('testit');
var assert = require('assert');
var transform = require('./index');

test('jstransformer-css', function(done) {
  var json = transform.render('body { background: #eee; color: #888; }');
  assert.deepEqual(json, fs.readFileSync('./expected.json', 'utf8'));
  done();
});

test('should support sourcemaps', function(done) {
  var code = 'body {\n  font-size: 12px;\n}';
  var ast = transform.render(code, {source: 'body.css'});
  var data = css.stringify(JSON.parse(ast), {sourcemap: true});

  assert.strictEqual(typeof data, 'object');
  assert.strictEqual(data.code, code);
  assert.deepEqual(data.map.sources, ['body.css']);
  done();
});
