/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import Bootstrap from './src/bootstrap';

class ColorThemes extends React.Component {
  render() {
    return <Bootstrap />;
  }
}

React.AppRegistry.registerComponent('ColorThemes', () => ColorThemes);
