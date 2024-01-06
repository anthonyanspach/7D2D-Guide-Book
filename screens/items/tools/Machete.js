{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MacheteItem() {
    return (
      <View>
        <Text>Machete info</Text>

        <Text>Description:</Text>
        <Text>The Machete is a bladed melee weapon that is also quite useful as a butchering tool. -Sneaking attack increases 400% extra damage in A21.-</Text>

        <Text>Uses:</Text>
        <Text>When used in combat, a Machete is an effective, short range Melee weapon. Its maximum damage potential and ability to easily dismember zombies make it a valuable melee weapon for silently taking out zombies.</Text>
        <Text>Butchering. Clicking the left mouse button will use the Machete, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Machete is the most effective tool for butchering dead animals.</Text>

        <Text>Crafting:</Text>
        <Text>5 Machete Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>50 Wood</Text>
        <Text>15 Leather</Text>
        <Text>15 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Knife Guy</Text>
      </View>
    );
  }

export default MacheteItem;