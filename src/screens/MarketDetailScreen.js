import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function MarketDetailScreen({route}) {
  const {item} = route.params;

  const handleTriangle = i => {
    if (i >= 0) return true;
    return false;
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.lightTitle}>Daily Change</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={[styles.lightTitle, {fontSize: 12}]}>
            {item.current_price} USD
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={styles.uptriangle}
              source={
                handleTriangle(item.price_change_percentage_24h.toFixed(3))
                  ? require('../assets/triangleup.png')
                  : require('../assets/triangledown.png')
              }
            />
            <Text
              style={[
                styles.title,
                {fontWeight: '400'},
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
        <View
          style={{
            width: '100%',
            height: 400,
            backgroundColor: 'white',
          }}
        />
        <View
          style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
          <View
            style={{
              width: '90%',
              borderRightWidth: 1,
              borderRightColor: '#eaebed',
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: '4%',
            }}>
            <View style={[styles.btn_wrap, {backgroundColor: '#00889e'}]}>
              <Text style={[styles.btn_text, {color: 'white'}]}>Daily</Text>
            </View>
            <View style={styles.btn_wrap}>
              <Text style={styles.btn_text}>Weekly</Text>
            </View>
            <View style={styles.btn_wrap}>
              <Text style={styles.btn_text}>Monthly</Text>
            </View>
            <View style={styles.btn_wrap}>
              <Text style={styles.btn_text}>Yearly</Text>
            </View>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingLeft: '4%',
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              resizeMode={'contain'}
              source={require('../assets/graph.png')}
            />
          </View>
        </View>

        <View style={styles.item_container}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Image
              style={{
                width: 35,
                height: 35,
                resizeMode: 'contain',
                marginRight: 10,
              }}
              source={{uri: item.image}}
            />
            <Text style={styles.itemTitle}>{item.name}</Text>
          </View>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Text style={styles.nty}>No {item.name} yet</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f9fb',
  },
  topContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 0,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  lightTitle: {
    fontSize: 14,
    color: '#889190',
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  btn_wrap: {
    paddingVertical: '3%',
    paddingHorizontal: '4%',

    borderRadius: 10,
    backgroundColor: '#ddecf1',
  },
  btn_text: {
    fontSize: 11,
    color: '#5e7d81',
    fontFamily: 'Roboto',
  },
  item_container: {
    backgroundColor: 'white',
    height: 90,
    width: '100%',
    marginTop: '12%',
    borderWidth: 1,
    borderColor: '#e9eaec',
    borderRadius: 13,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 13,
    color: 'black',
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  nty: {
    color: '#b1b8b8',
    fontSize: 13,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
  uptriangle: {
    width: 12,
    height: 12,
    marginRight: 5,

    resizeMode: 'contain',
    marginTop: '2.1%',
  },
});
