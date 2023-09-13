import React from 'react';
import {FlatList, Text, View} from 'react-native';

const App = () => {
  const users = [
    {id: 1, name: 'Sagar'},
    {
      id: 2,
      name: 'Raj',
    },
    {
      id: 3,
      name: 'Prince',
    },
    {
      id: 4,
      name: 'goal',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 32}}>List with Flat List component</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text
            style={{
              fontSize: 20,
              backgroundColor: 'black',
              color: 'aqua',
              marginBottom: 10,
              textAlign: 'center',
              textAlignVertical:'center',
              borderRadius:20
            }}>
            {item.name}
          </Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
