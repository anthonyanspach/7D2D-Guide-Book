{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WireToolItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wire Tool info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>A wire tool is used to wire electrical components. Focus on any electrical component and use the secondary action to add a wire to a parent and once again to complete the connection to a child component. Focus on any electrical component and use the primary action to remove or cut that components wire to its parent component. With the wire tool equipped you can see many useful things including: a components power usage and power status, the flow of power from parent to its child component and the aiming of objects with motion sensing.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>9 Forged Steel</Text>
        <Text style={[styles.list]}>3 Machnical Parts</Text>
      </ScrollView>
    );
  }

export default WireToolItem;


const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 200,
  },
  container: {
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 10,
    
  },
  text: {
    color: 'red',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  list: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenHeader: {
    color: 'red',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});