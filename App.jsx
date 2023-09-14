import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

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
      <Text style={styles.heading}>Loop with flat list</Text>
      {/* FlatList component to render the list of users */}
      <FlatList
        data={users}
        renderItem={({item}) => <UserData items={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const UserData = props => {
  //Access props from the flatlist
  const item = props.items;
  return (
    <View style={styles.box}>
      <Text style={styles.items}>{item.id}.</Text>
      <Text style={styles.items}>{item.name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  box: {
    flexDirection: 'row',
    backgroundColor: 'black',
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: 'aqua',
    height: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  items: {
    flex: 1,
    fontSize: 20,
    color: 'aqua',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default App;
