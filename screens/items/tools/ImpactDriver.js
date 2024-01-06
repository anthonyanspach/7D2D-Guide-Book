{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ImpactDriverItem() {
    return (
      <View>
        <Text>Impact Driver info</Text>

        <Text>Description:</Text>
        <Text>Impact Driver is a tool used to disassemble various mechanical and electrical blocks. It is more efficient than the Wrench or Ratchet.</Text>

        <Text>Uses:</Text>
        <Text>Salvaging. Using the primary click (default left mouse button) will use the Wrench, hitting any item or block that is targeted by the crosshairs and within range. This will allow you harvest the item or block for additional resources not available when using other harvesting tools that are not designated as Disassemble Tools.</Text>

        <Text>Crafting:</Text>
        <Text>5 Motor Tools Parts</Text>
        <Text>80 Forged Iron</Text>
        <Text>30 Mechanical Parts</Text>
        <Text>3 Springs</Text>
        <Text>15 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Scrapping 4 Fun</Text>
      </View>
    );
  }

export default ImpactDriverItem;