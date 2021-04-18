import React from 'react';
import {StyleSheet, Text, TextInput as Input, View} from 'react-native';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.labelInput}>{label}</Text>
      <Input style={styles.Input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  labelInput: {
    fontSize: 17,
    marginHorizontal: 28,
    fontWeight: 'bold',
    marginBottom: 2,
  },

  Input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    marginHorizontal: 24,
    paddingVertical: 10,
    paddingLeft: 12,
    marginBottom: 18,
  },
});
