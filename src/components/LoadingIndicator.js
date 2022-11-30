import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

export default function LoadingIndicator() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f9fb',
      }}>
      <ActivityIndicator size={'large'} color="red" />
    </View>
  );
}
