import React from "react";
import { View,Text } from "react-native";
import CompanyData from "./components/CompanyData";
const App=()=>{
  return(
    <View>
      <Text style={{fontSize:40,color:'green'}}>Learning the use of components</Text>
      <Text style={{fontSize:25}}>It is independent and reusable code such as function.some use are given below </Text>
      <UserData/>
      <CompanyData/>
    </View>
  );
}
const UserData=()=>{
  let name='Prince Chaudhary';
  const age=20;
  const aim="Entrepreneur";
  return(
    <View>
      <Text style={{fontSize:20}}>Name: {name}</Text>
      <Text style={{fontSize:20}}>Age: {age} </Text>
      <Text style={{fontSize:20}}>Aim: {aim}</Text>
    </View>
  );
}


export default App;