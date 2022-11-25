import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import AuthStack from './src/navigations/AuthStack';
import {AuthProvider} from './src/context/AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <AuthStack />
    </AuthProvider>
  );
}
