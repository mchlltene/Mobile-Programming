import React, {useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import UserProfile from '../../molecules/UserProfile';
import Axios from 'axios';

const ScreenInputData = () => {
  const [users, setUsers] = useState([]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:8081/users').then(res => setUsers(res.data));
  }, [users]);

  const handleSubmit = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    Axios.post('http://localhost:8081/users', data);
  };

  return (
    <View>
      <View>
        {/* INPUT DATA */}
        <TextInput
          value={firstName}
          label="First Name"
          placeholder="Masukan First Name Anda"
          onChangeText={e => setFirstName(e)}
        />
        <TextInput
          value={lastName}
          label="Last Name"
          placeholder="Masukan Last Name Anda"
          onChangeText={e => setLastName(e)}
        />
        <TextInput
          value={email}
          label="First Name"
          placeholder="Masukan Email Name Anda"
          onChangeText={e => setEmail(e)}
        />
        <Button label="Tambah" onSubmit={handleSubmit} />
      </View>

      {/* DISPLAY DATA */}
      <View>
        <ScrollView>
          {users.map(item => (
            <UserProfile
              key={item.id}
              firstName={`${item.firstName} ${item.lastName}`}
              email={item.email}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ScreenInputData;

const styles = StyleSheet.create({});
