import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import IconBack from '../../../assets/icon/IconBack/index';
import {Gap} from '../../atoms';

const Header = ({title, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && ( //condtion renderingjika ada onback maka tampilkan
        <TouchableOpacity>
          <View style={styles.back}>
            <IconBack />
          </View>
        </TouchableOpacity>
      )}

      <Gap width={26} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 28,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  back: {
    padding: 10,
  },
});
