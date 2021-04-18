import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenInputData from './pages/ScreenInput&DisplayData';

const App = () => {
  return (
    <View>
      <Text style={styles.Title}>Input & Display Screen</Text>
      <ScreenInputData />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  Title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 18,
  },
});
