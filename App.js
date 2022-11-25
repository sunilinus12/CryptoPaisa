import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStack';
export default function App() {
  return <AuthStack />;
}
