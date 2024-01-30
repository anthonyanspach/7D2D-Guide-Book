{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function AugerItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Auger info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Auger is a multipurpose tool that can be used to rapidly destroy anything but wooden blocks. The Auger can be looted from Decayed Sedans, Working Stiffs Crate, Garage Storage, and Bank Wall Safe. While the Auger can be used as a melee weapon, it is ill-advised as it deals very low damage and can often use a lot of gas just to kill a few enemies. Additionally, no scaling with any attribute provides any bonuses in mid to late game. -The Auger requires fuel in the form of Gas Cans. Refueling is done automatically and can also be done manually by pressing the reload button (while the Auger is selected and with a Gas Can in the inventory).-</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>Harvesting. Using the primary click (default left mouse button) will dig with the Auger, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to dig into the earth, harvesting Resources with each use. Shovels are the most effective tools for harvesting soft earth-based blocks such as Gravel, Clay Soil, Sand, Snow, or Forest Ground. Shovels are also the most effective tools for harvesting Cobblestone Rocks and Cement from the Pallets found in various POIs.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Motor Tools Parts</Text>
        <Text style={[styles.list]}>1 Bicycle Handlebars</Text>
        <Text style={[styles.list]}>1 Engine</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Tools Digest</Text>
      </ScrollView>
    );
  }

export default AugerItem;


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