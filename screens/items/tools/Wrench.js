{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function WrenchItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wrench info</Text>
        
        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Wrench is a tier 1 Disassemble Tool used in Salvaging, which is the harvesting of electrical and mechanical objects including bulky devices (cars, trucks, training benches, air conditioners, electric conductors), electronic devices (computers, vending machines, lamps, consoles, etc.), appliances (microwaves, toasters, toilets, sinks, water dispensers, etc.) and others. This allows obtaining additional resources not available through usage of any other tool. The Wrench can also serve as a mediocre melee Weapon.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>Salvaging. Using the primary click (default left mouse button) will use the Wrench, hitting any item or block that is targeted by the crosshairs and within range. This will allow you harvest the item or block for additional resources not available when using other harvesting tools that are not designated as Disassemble Tools.</Text>
        <Text style={[styles.text]}>When used in combat, the Wrench is a functional, if not very effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>36 Forged Iron</Text>
        <Text style={[styles.list]}>12 Mechanical Parts</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Scrapping 4 Fun</Text>
      </ScrollView>
    );
  }

export default WrenchItem;