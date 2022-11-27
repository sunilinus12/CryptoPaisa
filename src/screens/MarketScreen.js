import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemCard from '../components/ItemCard';
import axios from 'axios';

export default function MarketScreen() {
  const [data, setdata] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h',
      );
      if (res.status) {
        setdata(res?.data);
      }
    } catch (error) {
      console.log('error while getting data', error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (data.length === 0) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f9fafc',
        }}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.text_left}>Market</Text>
        <View style={styles.inner_title_container}>
          <Text style={styles.text_right_up}>Avg. 24hr Change</Text>
          <Text style={styles.text_right_down}>1.10%</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <ItemCard item={item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    paddingHorizontal: 20,
  },
  title_container: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 0,
  },
  inner_title_container: {
    alignItems: 'flex-end',
  },
  text_left: {
    fontSize: 24,
    color: '#194245',
    fontWeight: '500',
  },
  text_right_up: {
    fontSize: 15,
    color: '#949b9b',
    fontWeight: '400',
  },
  text_right_down: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
  },
});
