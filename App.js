import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LoginRegistrationPage,
  NaturalHazards,
  SelectTypePage
} from './components';
// import HomeScreen from './components/Home';
// import LoginPage from './components/LoginRegistrationPage'
// import NaturalPage from './components/NaturalHazards' 
import { createStackNavigator } from 'react-navigation'

export default App = createStackNavigator({
  Login: { screen: LoginRegistrationPage },
  SelectType: {screen: SelectTypePage},
  Natural : { screen: NaturalHazards },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
