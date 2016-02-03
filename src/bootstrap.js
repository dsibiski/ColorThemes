/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  Component,
} from 'react-native';

import App from './app';

// We first import our colors module...
import colors from './colors';

// Then here we are setting which colorTheme is applied at app start.

// Uncomment this line for the Red theme...
colors.dependencies.currentTheme = colors.redTheme;

// Uncomment this line for the Blue theme...
// colors.dependencies.currentTheme = colors.blueTheme;

class Bootstrap extends Component {
  render() {
    return <App />;
  }
}

module.exports = Bootstrap;
