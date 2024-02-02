{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeBatonItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pipe Baton Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Pipe Baton is a Melee weapon that players can craft with limited basic resources early in game or as needed when the player dies randomly and limited resources are available after they respawn in a different area away from their supplies. It can be found relatively frequently in early gamestages, making a decent early-game weapon if found at a moderate quality. The Pipe Baton can also be used as a Butchering tool to harvest small amounts of Raw Meat and Animal Fat. It may be repaired using Short Iron Pipes.</Text>
        <Text style={[styles.text]}>This Pipe Baton was introduced in Alpha 20 along with long range weapons that also use Short Iron Pipe to craft.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>12 Iron Pipe</Text>
        <Text style={[styles.list]}>9 Leather</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Tech Planet</Text>
      </ScrollView>
    );
  }

export default PipeBatonItem;


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