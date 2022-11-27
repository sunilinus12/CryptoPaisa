import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ItemCard from '../components/ItemCard';

export default function MarketScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.text_left}>Market</Text>
        <View style={styles.inner_title_container}>
          <Text style={styles.text_right_up}>Avg. 24hr Change</Text>
          <Text style={styles.text_right_down}>1.10%</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ItemCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 20,
  },
  title_container: {
    height: 70,
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inner_title_container: {
    alignItems: 'flex-end',
  },
  text_left: {
    fontSize: 24,
    color: '#0A445E',
    fontWeight: '500',
  },
  text_right_up: {
    fontSize: 15,
    color: 'gray',
    fontWeight: '400',
  },
  text_right_down: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
});
