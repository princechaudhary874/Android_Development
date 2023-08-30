import React from 'react'
import { Text, View } from 'react-native';

const CompanyData=()=>{
    let name='Metahorizon';
    const branch=`IT`;
    const location="Thamel";
    return(
      <View>
        <Text style={{fontSize:20}}>Company Name: {name}</Text>
        <Text style={{fontSize:20}}>Age: {branch} </Text>
        <Text style={{fontSize:20}}>Aim: {location}</Text>
      </View>
    );
  }

export default CompanyData