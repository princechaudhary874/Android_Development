import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [name, setName] = useState('I am the child components');
  return (
    <View>
      <Text style={{fontSize: 40}}>Props</Text>
      <Button
        title="Update Props"
        onPress={() => setName('Props is updated successfull!')}
      />
      <User name={name} />
    </View>
  );
};
//creating child components
const User = (props) => {
  return (
    <View style={{backgroundColor: 'black', paddingLeft: 25}}>
      <Text style={{fontSize: 30, color: 'aqua'}}>{props.name}</Text>
    </View>
  );
};
export default App;
