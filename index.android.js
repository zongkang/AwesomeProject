/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello{this.props.name}</Text>
        );
    }
}

export default class AwesomeProject extends Component {
    render() {
        let pic = {
            uri: "https://www.baidu.com/img/bd_logo1.png"
        };

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    环境光临RN
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    Shake or press menu button for dev menu
                </Text>
                <Image source={pic} style={{width: 100, height: 80}}/>
                <Greeting name="呵呵呵呵呵呵"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
