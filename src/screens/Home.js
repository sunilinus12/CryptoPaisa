import {Button, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {LineChart} from 'react-native-chart-kit';

export default function Home() {
  const {Logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          Logout();
        }}
        title="logout"
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
