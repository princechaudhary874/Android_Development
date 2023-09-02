import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// importing external Style
import ExStyles from './components/style'
const App = () => {
  return (
    <View>
      {/* inline style */}
      <Text style={{fontSize:40, backgroundColor:'blue'}} >Style: used to design</Text>
      <Text  style={styles.textBox}>Internal Style</Text>
      <Text  style={ExStyles.exTextBox}>External Style</Text>
      {/* using  inline,internal,external style on a single text
      */}
      <Text  style={[ExStyles.exTextBox,styles.textBox,{fontWeight:'300'}]}>All in one.</Text>
    </View>
  )
}
// internal css
const styles=StyleSheet.create(
  {
    textBox:{
      fontSize:30,
      backgroundColor:'green',
      marginTop:10,
      textAlign:'center',
      textAlignVertical:'center',
      borderRadius:20,
      height:50,
      color:'white'
    }
  }
)
export default App