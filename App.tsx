import React, { useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const App = () => {
  const[name,setName]=useState('raj');
  return (
    <View>
      <Text style={{fontSize: 40}}>Handle the textInput</Text>
      <Text style={{fontSize: 30, color:'red'}}>{name}</Text>
      <TextInput
        placeholder="Enter your name"
        // value is used to set value of the input
        value={name}
        style={styles.design}
        onChangeText={(text)=>{setName(text)}}
      />
      <Button title='Clear' onPress={(text)=>setName('')}/>
    </View>
  );
};
 const styles=StyleSheet.create({
  design:{
    fontSize: 30,
    color: 'black',
    borderWidth: 2,
    borderColor: 'purple',
    marginBottom:15,
  }
 })
export default App;
