var fs = require('fs');
var babelConfig;

try {
  babelConfig = JSON.parse(fs.readFileSync('./.babelrc'));
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

require('babel-register')(babelConfig);
module.exports = require('./webpack.config.server.js');