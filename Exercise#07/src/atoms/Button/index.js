import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit} style={styles.button}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 11,
    backgroundColor: '#FF8C21',
    paddingVertical: 15,
    // alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 40,
  },

  labelButton: {
    textAlign: 'center',
    fontSize: 14,
    color: 'white',
    fontWeight: '700',
  },
});

export default Button;
