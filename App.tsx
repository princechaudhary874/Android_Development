import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // learning about jsx(-power house of react-native mainly used to put html and js or ts together)
  const fName = 'Prince';
  const lName = 'Chaudhary';
  const Age = 30;
  return (
    <View>
      <Text style={{fontSize: 40}}>
        {fName} {lName}
      </Text>
      <Text style={{fontSize: 40}}>{10 + 23}</Text>
      <Text style={{fontSize: 30}}>
        {Age === 30 ? 'Your age is 30 ' : 'Your age is not matching'}
      </Text>
      <Text style={{fontSize: 20}}>
        {Age > 18
          ? 'Your are eligible for voting '
          : 'Your are not eligible for voting'}
      </Text>
      {Age < 20 ? (
        <Text style={{fontSize: 40, color: 'red'}}>You are underage</Text>
      ) : (
        <Text style={{fontSize: 40, color: 'green'}}>You are adult</Text>
      )}
    </View>
  );
};
export default App;
