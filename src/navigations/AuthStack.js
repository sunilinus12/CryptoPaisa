import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import MarketScreen from '../screens/MarketScreen';
import MarketDetailScreen from '../screens/MarketDetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createStackNavigator();
export default function AuthStack() {
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplashLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isSplashLoading ? (
        <SplashScreens />
      ) : false ? (
        <AfterLoginScreens />
      ) : (
        <AuthScreens />
      )}
    </NavigationContainer>
  );
}
const AuthScreens = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

const AfterLoginScreens = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Market" component={MarketScreen} />
    <Stack.Screen name="MarketDetail" component={MarketDetailScreen} />
  </Stack.Navigator>
);

const SplashScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="splash"
      component={SplashScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
