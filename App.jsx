import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

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
    <View style={{flex: 1}}>
      <Text style={styles.heading}>Dynamic Grid</Text>
      <ScrollView>
        <View style={styles.gridContainer}>
          {users.map(item => (
            <View key={item.id} style={styles.gridItem}>
              <Text style={styles.mapComp}>{item.name}</Text>
            </View>
          ))}
        </View>
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '50%', // You can adjust the width as needed for the desired number of columns
  },
  mapComp: {
    fontSize: 30,
    backgroundColor: 'black',
    color: 'aqua',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 20,
    margin: 10,
    width: 150, 
    height: 150,
  },
});
export default App;
