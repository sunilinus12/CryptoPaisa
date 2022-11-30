import {
  ActivityIndicator,
  Dimensions,
  Image,
  processColor,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CandleStickChart} from 'react-native-charts-wrapper';
import axios from 'axios';
import SimpleToast from 'react-native-simple-toast';
import LoadingIndicator from '../components/LoadingIndicator';

export default function MarketDetailScreen({route}) {
  const {item} = route.params;
  const [chartdata, setChartData] = useState([]);
  const [loading, setloading] = useState(false);
  const [Time, setTime] = useState('1d');
  const handleTriangle = i => {
    if (i >= 0) return true;
    return false;
  };

  const handleChart = async () => {
    try {
      setloading(true);
      const res = await axios.get(
        `https://api.binance.com/api/v3/klines?symbol=${(item?.symbol).toUpperCase()}USDT&interval=${Time}&limit=60`,
      );
      if (res.status) {
        let r = res.data.map(i => {
          return {
            shadowH: parseFloat(i[2]),
            shadowL: parseFloat(i[3]),
            open: parseFloat(i[1]),
            close: parseFloat(i[4]),
          };
        });
        r = JSON.parse(JSON.stringify(r));
        setChartData(r);
        setloading(false);
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleChart();
  }, [Time]);

  if (chartdata.length === 0) {
    return <LoadingIndicator />;
  }
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
            height: 0.5 * Dimensions.get('screen').height,
            backgroundColor: '#f6f9fb',
          }}>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <CandleStickChart
              style={{flex: 1}}
              data={{
                dataSets: [
                  {
                    values: chartdata,
                    label: '',
                    config: {
                      highlightColor: processColor('darkgray'),

                      shadowColor: processColor('black'),
                      shadowWidth: 1,
                      shadowColorSameAsCandle: true,
                      increasingColor: processColor('#71BD6A'),
                      increasingPaintStyle: 'FILL',
                      decreasingColor: processColor('#D14B5A'),
                    },
                    xAxis: {},
                    yAxis: {},
                  },
                ],
              }}
              marker={{
                enabled: true,
                markerColor: processColor('#2c3e50'),
                textColor: processColor('white'),
              }}
              chartDescription={{text: ''}}
              legend={{
                enabled: true,
                textSize: 14,
                form: 'CIRCLE',
                wordWrapEnabled: true,
              }}
              xAxis={{}}
              yAxis={{}}
              maxVisibleValueCount={16}
              autoScaleMinMaxEnabled={false}
            />
          )}
        </View>
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
            <TouchableWithoutFeedback
              onPress={() => {
                setTime('1d');
              }}>
              <View
                style={[
                  styles.btn_wrap,
                  Time == '1d' ? {backgroundColor: '#00889e'} : null,
                ]}>
                <Text
                  style={[
                    styles.btn_text,
                    Time == '1d' ? {color: 'white'} : null,
                  ]}>
                  Daily
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => {
                setTime('1w');
              }}>
              <View
                style={[
                  styles.btn_wrap,
                  Time == '1w' ? {backgroundColor: '#00889e'} : null,
                ]}>
                <Text
                  style={[
                    styles.btn_text,
                    Time == '1w' ? {color: 'white'} : null,
                  ]}>
                  Weekly
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setTime('1m');
              }}
              style={[
                styles.btn_wrap,
                Time == '1m' ? {backgroundColor: '#00889e'} : null,
              ]}>
              <Text
                style={[
                  styles.btn_text,
                  Time == '1m' ? {color: 'white'} : null,
                ]}>
                Monthly
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                SimpleToast.show(
                  'Coming soon for 1year....',
                  SimpleToast.SHORT,
                );
              }}
              style={[
                styles.btn_wrap,
                Time == '1y' ? {backgroundColor: '#00889e'} : null,
              ]}>
              <Text
                style={[
                  styles.btn_text,
                  Time == '1y' ? {color: 'white'} : null,
                ]}>
                Yearly
              </Text>
            </TouchableOpacity>
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

const data = {};
