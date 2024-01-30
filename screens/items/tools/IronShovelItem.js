{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function IronShovelItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Shovel info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Shovel is a Tool that can be used to dig into the earth, creating holes in the ground and harvesting resources in the process. It can also serve as a weak melee Weapon in a pinch.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will dig with the Iron Shovel, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to dig into the earth, harvesting Resources with each use. Shovels are the most effective tools for harvesting soft earth-based blocks such as Gravel, Clay Soil, Sand, Snow, or Forest Ground. Shovels are also the most effective tools for harvesting Cobblestone Rocks and Cement from the Pallets found in various POIs.</Text>
        <Text style={[styles.text]}>When used in combat, the Iron Shovel is a very ineffective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>48 Forged Iron</Text>
        <Text style={[styles.list]}>30 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Tools Digest</Text>
      </ScrollView>
    );
  }

export default IronShovelItem;


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