import React from 'react';
import {Button, View, Text} from 'react-native';


const App = () => {
  let data=40;
  const fruits =(val) => {
    data=50
    // console.warn(val);
    console.warn(data);

   }
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>
        Button and onPress Event
      </Text>
      <Text style={{fontSize: 50, color: 'black'}}>
        {data}
      </Text>
      {/* trick to call a function using onPress */}
       {/* this function is mainly used to pass parameter */}
       <Button
        title="On Press using arrow function"
        onPress={() => fruits('kem xo motabhai')}
        color={'red'}
      />
       {/* Alternative tricks */}
      {/* this method is used when we don't have to pass a parameter */}
      <Button title="On Press" onPress={fruits} color={'green'} />
     
     
    </View>
  );
};

export default App;
