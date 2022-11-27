import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ItemCard() {
  return (
    <View style={styles.item_container}>
      <View style={styles.top_container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={require('../assets/bitcoin.png')} style={styles.img} />
          <Text style={styles.item_title}>Bitcoin</Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text style={styles.usd_value}>16,764.97 USD</Text>
          <Text style={styles.percentage}>0.208%</Text>
        </View>
      </View>
      <View style={styles.down_container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  item_container: {
    height: 120,
    width: '100%',
    backgroundColor: 'white',
    padding: '5%',
    borderRadius: 10,
  },
  top_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  down_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  item_title: {
    color: '#092D5E',
    fontSize: 15,
    fontWeight: '400',
  },
  usd_value: {
    fontSize: 14,
    color: 'black',
  },
  percentage: {
    fontSize: 13,
    color: 'gray',
    marginTop: 3,
  },
});
