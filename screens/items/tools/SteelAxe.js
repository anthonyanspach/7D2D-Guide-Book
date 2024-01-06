{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SteelAxeItem() {
    return (
      <View>
        <Text>Steel Axe info</Text>

        <Text>Description:</Text>
        <Text>The Steel Axe is a Tool that can be used to chop down trees and other items made from Wood, harvesting resources in the process. It can also serve as an effective melee Weapon.</Text>

        <Text>Uses:</Text>
        <Text>Harvesting. Using the primary click (default left mouse button) will swing the Steel Axe, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to cut down trees or destroy blocks for resources. Harvesting most items or blocks will provide Resources with each swing. Fireaxes are the most effective tools for chopping down Trees and for damaging wood-based items and blocks such as Wood Blocks.</Text>
        <Text>When used in combat, the Steel Axe is an effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>
        <Text>Butchering. When harvesting a recently slain animal corpse, a gore block, or bones, the Steel Axe acts as a Butcher Tool (similarly as Stone Axe and Iron Fireaxe), allowing you to obtain resources from the corpse that you would not get when using a tool that is not a designated Butcher Tool.</Text>

        <Text>Crafting:</Text>
        <Text>5 Steel Tool Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>50 Wood</Text>
        <Text>15 Leather</Text>
        <Text>15 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Tools Digest</Text>
      </View>
    );
  }

export default SteelAxeItem;