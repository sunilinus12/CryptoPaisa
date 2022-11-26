import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

export default function Home() {
  const {setLoginInfo} = useContext(AuthContext);
  return (
    <View>
      <Button
        onPress={() => {
          setLoginInfo([]);
        }}
        title="logout"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
