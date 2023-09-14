import React from 'react';
import {FlatList, Text, View} from 'react-native';
import UserData from './components/UserData';
const App = () => {
  const users = [
    {id: 1, name: 'Ranjit'},
    {id: 4, name: 'Sagar'},
    {id: 6, name: 'Sneha'},
    {id: 3, name: 'Prince'},
    {id: 9, name: 'Rajesh'},
    {id: 10, name: 'Sangam'},
    {id: 11, name: 'Neha'},
    {id: 13, name: 'Princess'},
    {id: 12, name: 'Raju'},
    {id: 14, name: 'Sanjay'},
    {id: 16, name: 'Sontosh'},
    {id: 18, name: 'Priya'},
    {id: 20, name: 'Raja'},
    {id: 21, name: 'Satish'},
    {id: 22, name: 'Nitish'},
    {id: 23, name: 'Pankaj'},
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 32,
          backgroundColor: 'black',
          color: 'white',
          textAlign: 'center',
          marginBottom: 20,
        }}>
        Loop with flat list
      </Text>
      {/* FlatList component to render the list of users */}
      <FlatList
        data={users}
        renderItem={({item}) => <UserData items={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
