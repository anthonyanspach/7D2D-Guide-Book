{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WrenchItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wrench info</Text>
        
        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Wrench is a tier 1 Disassemble Tool used in Salvaging, which is the harvesting of electrical and mechanical objects including bulky devices (cars, trucks, training benches, air conditioners, electric conductors), electronic devices (computers, vending machines, lamps, consoles, etc.), appliances (microwaves, toasters, toilets, sinks, water dispensers, etc.) and others. This allows obtaining additional resources not available through usage of any other tool. The Wrench can also serve as a mediocre melee Weapon.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>Salvaging. Using the primary click (default left mouse button) will use the Wrench, hitting any item or block that is targeted by the crosshairs and within range. This will allow you harvest the item or block for additional resources not available when using other harvesting tools that are not designated as Disassemble Tools.</Text>
        <Text style={[styles.text]}>When used in combat, the Wrench is a functional, if not very effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>36 Forged Iron</Text>
        <Text style={[styles.list]}>12 Mechanical Parts</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Scrapping 4 Fun</Text>
      </ScrollView>
    );
  }

export default WrenchItem;


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