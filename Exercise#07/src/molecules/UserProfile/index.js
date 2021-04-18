import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserProfile = ({firstName, email, lastName}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{firstName}</Text>
      <Text email={styles.email}>{email}</Text>
      <Text lastName={styles.name}>{lastName}</Text>
    </View>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    marginHorizontal: 30,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'orange',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
  },
});
