'use strict';

var colors = require('./');

// We wrap the currentTheme object in a function so that it is evaluated
// at run-time, after we define which theme is current.
module.exports = () => colors.dependencies.currentTheme;
