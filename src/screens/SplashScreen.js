import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SplashScreen({}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Image
          source={require('../assets/splash.png')}
          style={{
            width: '40%',
            height: '25%',
          }}
          resizeMode="contain"
        />
        <Text style={styles.splash_text}>Crypto Paisa</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: '5%',
    paddingBottom: '13%',
  },
  inner_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splash_text: {
    color: 'black',
    textTransform: 'uppercase',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 15},
    textShadowRadius: 10,
  },
});
