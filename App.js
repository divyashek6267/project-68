import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';

import fbScreen from './screens/fbScreen';
import instaScreen from './screens/instaScreen';

export default class App extends React.Component() {
render(){
  return(
    <View style = {styles.container}>
    <AppContainer />
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  FACEBOOK : fbScreen,
  INSTAGRAM : instaScreen
});

const AppContainer = createAppContainer(TabNavigator);
