var Linter = require('standard-engine').linter,
    opts = require('./options');

module.exports = new Linter(opts);
