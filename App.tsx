import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const App = () => {
  let data ="ram"
  const [name, setName] = useState("Hello baby!");
  const [number, setNumber] = useState(0);
  //function to update name
  const update = () => {
    setName("Raj");
    data="ravan"
  }
  //function to increase number
  const increment = () => {
    setNumber(number + 1)
  }

  //function to decrease number
  const decrement = () => {
    setNumber(number - 1)
  }
  return (
    <View>
      <Text style={{ fontSize: 40 }}>
        {name} {data}
      </Text>
      <Button onPress={update} title='Update Name' />
      <Text style={{ fontSize: 40 }}>
        {number}
      </Text>
      <Button onPress={increment} title='UP' color={'red'} />
      <Button onPress={decrement} title='down' color={'green'} />

    </View>


  )
}

export default App