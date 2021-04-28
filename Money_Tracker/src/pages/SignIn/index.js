import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SigIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" />
      <View style={styles.containerWrapper}>
        <TextInput
          title="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} width={20} />
        <TextInput title="Password" placeholder="Type your email password" />

        <Gap height={16} width={20} />
        <Button title="Sign In" />
        <Gap height={16} width={20} />
        <Button
          title="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SigIn;

const styles = StyleSheet.create({
  containerWrapper: {
    marginTop: 24,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 26,
  },

  page: {
    flex: 1,
  },
});
