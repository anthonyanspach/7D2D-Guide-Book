{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WrenchItem() {
    return (
      <View>
        <Text>Wrench info</Text>
        
        <Text>Description:</Text>
        <Text>The Wrench is a tier 1 Disassemble Tool used in Salvaging, which is the harvesting of electrical and mechanical objects including bulky devices (cars, trucks, training benches, air conditioners, electric conductors), electronic devices (computers, vending machines, lamps, consoles, etc.), appliances (microwaves, toasters, toilets, sinks, water dispensers, etc.) and others. This allows obtaining additional resources not available through usage of any other tool. The Wrench can also serve as a mediocre melee Weapon.</Text>

        <Text>Uses:</Text>
        <Text>Salvaging. Using the primary click (default left mouse button) will use the Wrench, hitting any item or block that is targeted by the crosshairs and within range. This will allow you harvest the item or block for additional resources not available when using other harvesting tools that are not designated as Disassemble Tools.</Text>
        <Text>When used in combat, the Wrench is a functional, if not very effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text>Crafting:</Text>
        <Text>36 Forged Iron</Text>
        <Text>12 Mechanical Parts</Text>
        <Text>6 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Scrapping 4 Fun</Text>
      </View>
    );
  }

export default WrenchItem;