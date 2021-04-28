import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Button, TextInput, Gap} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" onBack={() => navigation.goBack()} />
      <View style={styles.contentWrapper}>
        <View style={styles.avatarWrapper}>
          <View style={styles.border}>
            <View style={styles.addPhoto}>
              <Text style={styles.textAddPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>

        <TextInput title="Full Name" placheholder="Type your full name" />
        <Gap height={16} />
        <TextInput title="Password" placheholder="Type your full Password" />
        <Gap height={16} />
        <Button title="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 29,
  },
  addPhoto: {
    width: 90,
    height: 90,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 90,
  },
  textAddPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
