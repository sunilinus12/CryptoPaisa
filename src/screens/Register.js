import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
export default function Register({navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Image
          source={require('../assets/splash.png')}
          style={{
            width: 0.3 * Dimensions.get('screen').width,
            height: 0.15 * Dimensions.get('screen').height,
          }}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor={'gray'}
          value={email}
          onChangeText={setEmail}
          style={[styles.input, {width: 0.8 * Dimensions.get('screen').width}]}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'gray'}
          value={password}
          secureTextEntry={true}
          onChangeText={setPassword}
          style={[styles.input, {width: 0.8 * Dimensions.get('screen').width}]}
        />
        <TouchableOpacity activeOpacity={0.8}>
          <View
            style={[
              styles.button,
              {width: 0.8 * Dimensions.get('screen').width},
            ]}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
        <Text
          style={styles.textsmall}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Already have a account?
          <Text style={styles.register}> Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS == 'ios' ? '30%' : '20%',
  },
  input: {
    width: '80%',
    marginVertical: '4%',
    height: 45,
    borderWidth: 0.3,
    borderColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: 'black',
    borderRadius: 2,
  },
  logintitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
    marginVertical: 20,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#0F87C1',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '15%',
  },
  textsmall: {
    fontSize: 12,
    color: '#1E688B',
    fontWeight: '400',
  },
  register: {
    fontSize: 13,
    color: '#053247',
    fontWeight: '500',
  },
  title: {
    fontSize: 18,
    color: '#052E41',
  },
});
