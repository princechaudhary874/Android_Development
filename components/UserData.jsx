
import { StyleSheet, Text, View} from 'react-native';
const UserData = props => {
    //Access props from the flatlist
    const item = props.items;
    return (
      <View style={styles.box}>
        <Text style={styles.items}>{item.id}.</Text>
        <Text style={styles.items}>{item.name}</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
   
    box: {
      flexDirection: 'row',
      backgroundColor: 'black',
      marginBottom: 10,
      borderRadius: 20,
      borderWidth: 3,
      borderColor: 'aqua',
      height: 50,
      marginLeft: 25,
      marginRight: 25,
    },
    items: {
      flex: 1,
      fontSize: 20,
      color: 'aqua',
      textAlign: 'center',
      textAlignVertical: 'center',
    },
  });
  export default UserData;