/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AppRegistry
} from 'react-native';

// import MyApp from './src/router';

// console.log(MyApp,'aaaaaaaaaaa')

export default class MyApp extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get st规划局可比NSalex.ios.js
        </Text>
        <Text style={styles.instructions}>
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



AppRegistry.registerComponent('MyApp', () => MyApp);

