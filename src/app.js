/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

// Again we import our colors module so we can use it...
import colors from './colors';

class App extends Component {
    render() {
        // Here we get the colors from the currentTheme...
        const { textColor, secondaryTextColor, backgroundColor } = colors.currentTheme();

        // We need to define the styles here because we don't have access to
        // our themes until runtime. This could also be done in componentDidMount
        // or some other lifecycle method.
        const containerStyle = [styles.container, { backgroundColor }];
        const welcomeStyle = [styles.welcome, { color: textColor }];
        const instructionsStyle = [styles.instructions, { color: secondaryTextColor }];

        return (
            <View style={containerStyle}>
                <Text style={welcomeStyle}>
                    Welcome to React Native!
                </Text>
                <Text style={instructionsStyle}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={instructionsStyle}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = App;
