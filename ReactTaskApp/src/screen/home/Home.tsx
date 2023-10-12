import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, wp} from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/RouteConstant';
import {useDispatch} from 'react-redux';
import {GET_ALL_POST} from './redux/HomeAction';
// import axios from 'axios';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/v1/posts');

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const resData = response.data;
      // setProducts(resData);
      console.log('fetch data', resData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handletoNextScrren = () => {
    navigation.navigate(ROUTES.LIST);
  };
  return (
    <View>
      <Text>Home</Text>
      <Pressable style={styles.nextSceenContainer} onPress={handletoNextScrren}>
        <Text style={styles.nextAddbutton}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  nextSceenContainer: {
    width: wp(16),
    height: hp(5),
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  nextAddbutton: {
    color: 'white',
    textAlign: 'center',
  },
});
