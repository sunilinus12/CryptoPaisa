import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ItemCard({item}) {
  return (
    <View style={styles.item_container}>
      <View style={styles.top_container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: item.image}}
            style={styles.img}
            resizeMode="contain"
          />
          <Text style={styles.item_title}>{item.name}</Text>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <Text style={styles.usd_value}>{item.current_price} USD</Text>
          <Text style={styles.percentage}>
            {item.price_change_percentage_24h.toFixed(3)}%
          </Text>
        </View>
      </View>
      <View style={styles.down_container}>
        {item.name === 'Bitcoin' && (
          <View style={styles.wrap_popular}>
            <Text style={styles.popular_text}>Most Popular</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item_container: {
    height: 120,
    width: '100%',
    backgroundColor: 'whitesmoke',
    padding: '5%',
    borderRadius: 10,
    marginBottom: '5%',
  },
  top_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  down_container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    width: 40,
    height: 45,
    marginRight: 10,
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
  wrap_popular: {
    borderWidth: 0.5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 8,
    position: 'absolute',
    left: 0,
    borderColor: 'gray',
    opacity: 0.6,
  },
  popular_text: {
    fontSize: 11,
    color: '#075104',
  },
});
