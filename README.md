# jstransformer-css

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-css.svg)](https://greenkeeper.io/)

[CSS -> AST](https://github.com/reworkcss/css) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-css/master.svg)](https://travis-ci.org/jstransformers/jstransformer-css)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-css/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-css)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-css/master.svg)](http://david-dm.org/jstransformers/jstransformer-css)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-css.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-css.svg)](https://www.npmjs.org/package/jstransformer-css)

## Installation

    npm install jstransformer-css

## API

> For more use-cases see the [tests](./test/index.js)

```js
var css = require('jstransformer-css')

css.render('body {\n  font-size: 12px;\n}');
//=> json abstract syntax tree
```

## License

MIT
