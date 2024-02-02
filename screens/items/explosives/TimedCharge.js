{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TimedChargeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Timed Charge Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>A Timed Charge is a Explosive box-shaped charge that applies highly concentrated damage and automatically detonates after 4 seconds. It seems to do a greatly reduced amount of damage when used on regular blocks, so these valuable, yet cheap explosives should be reserved for locked safes, crates and any other container that may be, including player-built storage.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>20 Iron</Text>
        <Text style={[styles.list]}>10 Gun Powder</Text>
        <Text style={[styles.list]}>1 Electrical Parts</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Explosive Magazine</Text>
      </ScrollView>
    );
  }

export default TimedChargeItem;


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