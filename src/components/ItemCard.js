import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ItemCard({item}) {
  const navigation = useNavigation();

  const handleTriangle = i => {
    if (i >= 0) return true;
    return false;
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('MarketDetail', {item});
      }}>
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
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={
                  handleTriangle(item.price_change_percentage_24h.toFixed(3))
                    ? require('../assets/triangleup.png')
                    : require('../assets/triangledown.png')
                }
                style={styles.triangelup}
              />
              <Text
                style={[
                  styles.percentage,
                  {
                    color: handleTriangle(
                      item.price_change_percentage_24h.toFixed(3),
                    )
                      ? '#28A56C'
                      : 'red',
                  },
                ]}>
                {item.price_change_percentage_24h.toFixed(3)}%
              </Text>
            </View>
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item_container: {
    height: 120,
    width: '100%',
    backgroundColor: '#fdfdfd',
    padding: '5%',
    borderRadius: 10,
    marginBottom: '5%',
    borderWidth: 1,
    borderColor: '#dee4e4',
  },
  top_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  down_container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
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
    color: '#044857',
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
    borderColor: '#bcbcbc',
    opacity: 1,
    backgroundColor: '#f9fafc',
  },
  popular_text: {
    fontSize: 11,
    color: '#075104',
  },
  triangelup: {
    width: 8,
    height: 8,
    resizeMode: 'contain',
    marginTop: '5%',
    marginRight: 3,
  },
});
