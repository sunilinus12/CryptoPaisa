import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Data, graduationsList} from '../utils';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Image
          style={{
            width: '100%',
            height: 0.28 * Dimensions.get('screen').height,
          }}
          resizeMode="cover"
          source={require('../assets/p2.jpg')}
        />

        <Text style={styles.title}>Find your job</Text>
        <FirtBox />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.title]}>Recent Jobs Lists</Text>
          <Text style={[styles.title, {color: '#7f7f7f'}]}>See all</Text>
        </View>
        <FlatList
          scrollEnabled={false}
          data={Data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <Card item={item} />;
          }}
        />
        <Text style={styles.title}>Jobs By Qualifications</Text>
        <FlatList
          numColumns={3}
          data={graduationsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.quali_box}>
                <Image
                  source={require('../assets/graduation-cap.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
                <Text style={styles.box_subtitle}>{item.name}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item_halfContainer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  item_container: {
    width: '100%',
    height: 120,
    backgroundColor: '#ffe0b2',
    padding: 10,
    borderRadius: 13,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
    paddingVertical: 5,
    paddingHorizontal: 15,
    position: 'relative',
  },
  title: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    marginVertical: 10,
  },
  half_container: {
    flex: 1,
    backgroundColor: '#e1bee7',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  icon_wrap: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  img: {width: 20, height: 20},
  first_container: {
    width: '100%',
    height: 200,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left_box: {
    flex: 1,
    backgroundColor: '#bbdefb',
    borderRadius: 20,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_box: {
    flex: 1,
    backgroundColor: '#c8e6c9',
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  box_title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  box_subtitle: {
    fontSize: 13,
    color: '#566572',
    fontWeight: '500',
    fontFamily: 'Roboto',
  },
  apply: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontSize: 12,
  },
  quali_box: {
    flex: 1,
    height: 80,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5%',
    borderRadius: 12,
    marginHorizontal: 5,
  },
});

const FirtBox = () => (
  <View style={styles.first_container}>
    <View style={styles.left_box}>
      <View style={[styles.icon_wrap, {marginBottom: 10}]}>
        <Image style={styles.img} source={require('../assets/home.png')} />
      </View>
      <Text style={styles.box_title}>44k</Text>
      <Text style={styles.box_subtitle}>Remote Jobs</Text>
    </View>
    <View
      style={{
        marginLeft: 10,
        flex: 1,
        backgroundColor: 'transparent',
      }}>
      <View style={[styles.half_container, {marginBottom: 5}]}>
        <View style={styles.icon_wrap}>
          <Image style={styles.img} source={require('../assets/heart.png')} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              fontWeight: '500',
              fontFamily: 'Roboto',
            }}>
            33k
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: 'black',
              fontWeight: '500',
              fontFamily: 'Roboto',
            }}>
            Full Time
          </Text>
        </View>
      </View>
      <View style={styles.right_box}>
        <View style={styles.icon_wrap}>
          <Image style={styles.img} source={require('../assets/home.png')} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.box_title}>78k</Text>
          <Text style={styles.box_subtitle}>Part Time</Text>
        </View>
      </View>
    </View>
  </View>
);
const Card = ({item}) => (
  <View style={styles.item_container}>
    <View style={styles.item_halfContainer}>
      <View
        style={[
          styles.icon_wrap,
          {backgroundColor: '#b865c8', marginRight: 10},
        ]}>
        <Image source={require('../assets/apple.png')} style={[styles.img]} />
      </View>
      <View>
        <Text>{item.position}</Text>
        <Text>{item.price}</Text>
      </View>
    </View>
    <View
      style={{
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <Text style={styles.apply}>Remote Job</Text>
      <Text style={styles.apply}>Apply</Text>
    </View>
  </View>
);
