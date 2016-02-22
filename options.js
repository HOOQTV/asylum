var eslint = require('eslint')
var pkg = require('./package.json')

var config = require('eslint-config-sanctuary')

module.exports = {
  eslint: eslint,
  cmd: 'asylum',
  version: pkg.version,
  homepage: pkg.homepage,
  bugs: pkg.bugs.url,
  tagline: 'Here is our asylum',
  eslintConfig: {
    baseConfig: config
  },
  formatter: 'asylum formatter needed'
}
