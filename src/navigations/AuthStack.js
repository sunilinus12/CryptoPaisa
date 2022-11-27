import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import MarketScreen from '../screens/MarketScreen';
import MarketDetailScreen from '../screens/MarketDetailScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Login from '../screens/Login';
import Register from '../screens/Register';
import {AuthContext} from '../context/AuthContext';

const Stack = createStackNavigator();

export default function AuthStack() {
  const {registerUsers, loginInfo, IsSplashLoading} = useContext(AuthContext);

  // console.log(registerUsers,loginInfo);
  return (
    <NavigationContainer>
      {IsSplashLoading ? (
        <SplashScreens />
      ) : loginInfo?.length > 0 ? (
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

const AfterLoginScreens = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 15,
          fontWeight: '500',
          color: '#044D52',
        },
        headerStyle: {
          backgroundColor: '#f6f9fb',
        },
        headerShadowVisible: false,
        headerTintColor: '#2b797f',
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: () => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('Market');
              }}>
              <View
                style={{
                  height: '100%',
                  width: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    color: 'black',
                    // marginRight: '5%',
                  }}>
                  Market
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
      <Stack.Screen name="Market" component={MarketScreen} />
      <Stack.Screen
        name="MarketDetail"
        options={{
          title: 'Detail',
        }}
        component={MarketDetailScreen}
      />
    </Stack.Navigator>
  );
};

const SplashScreens = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="splash"
      component={SplashScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
