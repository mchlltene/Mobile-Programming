import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/icon/LogoMT/index';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#02CF8E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
