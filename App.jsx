import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const users = [
    {id: 1, name: 'Ranjit'},
    {id: 4, name: 'Sagar'},
    {id: 6, name: 'Sneha'},
    {id: 3, name: 'Prince'},
    {id: 10, name: 'Rajesh'},
    {id: 14, name: 'Sangam'},
    {id: 16, name: 'Neha'},
    {id: 13, name: 'Princess'},
    {id: 12, name: 'Raju'},
    {id: 24, name: 'Sanjay'},
    {id: 26, name: 'Sontosh'},
    {id: 23, name: 'Priya'},
    {id: 210, name: 'Raja'},
    {id: 214, name: 'Satish'},
    {id: 216, name: 'Nitish'},
    {id: 213, name: 'Pankaj'},
  ];
  return (
    <View >
      <Text style={styles.heading}>List with Map Function</Text>
       <ScrollView>
       {users.map(item => (
          <Text style={styles.mapComp}>{item.name}</Text>
        ))}
       </ScrollView>
      
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

  mapComp: {
    fontSize: 32,
    backgroundColor: 'black',
    color: 'aqua',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
});
export default App;
