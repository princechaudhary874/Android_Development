import React from 'react';
import {SafeAreaView, SectionList, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Prince',
      data: ['java', 'js', 'c', 'c++', 'HTML'],
    },
    {
      id: 2,
      name: 'Raj',
      data: ['Python', 'js', 'c#', 'c++', 'css'],
    },
    {
      id: 3,
      name: 'Sneha',
      // Note: for nested array , we must use data as object name
      data: ['js', 'django', 'css', 'bootstrap', 'assembly language'],
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={{fontSize: 32}}>Section List </Text> */}
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={styles.object}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.header}>{name}</Text>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  object: {
    fontSize: 25,
    backgroundColor: 'black',
    color: 'aqua',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  header: {
    fontFamily: 40,
    color: 'red',
  },
});

export default App;
