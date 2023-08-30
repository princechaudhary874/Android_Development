import React from "react";
import{
  View,
  Text,
  Button
}from 'react-native';

const App=()=>{
  return(
    <View>
    <Text style={{fontSize:40}}>Hello React Native</Text>
    <Text style={{fontSize:30}}>Hello Prince Chaudhary</Text>
    {/* button can also be created within self closing tag  but title must be included*/}
    <Button title='Press Me' color={'purple'}/>
  </View>
  );
 
}
export default App;
