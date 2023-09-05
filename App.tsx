// Import necessary modules
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Define the main component
const App = () => {
  // State variables to store user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State variable to control whether to display user details
  const [display, setDisplay] = useState(false);

  // Function to reset the form data
  const resetData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      {/* Header */}
      <Text
        style={{
          fontSize: 35,
          textAlign: 'center',
          backgroundColor: 'green',
          marginTop: 10,
        }}>
        Simple Form
      </Text>
      
      {/* Text input fields */}
      <TextInput
        style={styles.textInput}
        placeholder="Enter your full name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        onChangeText={text => setPassword(text)}
        value={password}
      />
      
      {/* Buttons */}
      <View style={styles.buttons}>
        {/* Button to display user details */}
        <Button title="get details" onPress={() => setDisplay(true)} />
      </View>
      <View style={styles.buttons}>
        {/* Button to reset form data */}
        <Button title="reset" color={'red'} onPress={resetData} />
      </View>

      {/* Display user details conditionally */}
      {display ? (
        <View style={{ backgroundColor: 'purple' }}>
          <Text style={{ fontSize: 25 }}>Your name is :{name}</Text>
          <Text style={{ fontSize: 25 }}>Your email is :{email}</Text>
          <Text style={{ fontSize: 25 }}>Your password is :{password}</Text>
        </View>
      ) : null}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 15,
  },
  buttons: {
    margin: 10,
  },
});

// Export the component as the default export
export default App;
