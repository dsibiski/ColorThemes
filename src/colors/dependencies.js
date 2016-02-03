'use strict';

var _currentTheme = null;

var dependencies = {
    set currentTheme(value) {
        _currentTheme = value;
    },

    get currentTheme() {
        return _currentTheme;
    }
}

module.exports = dependencies;
