import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/RouteConstant';

const Home = () => {
  const navigation = useNavigation();
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
