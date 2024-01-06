{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function IronFireaxeItem() {
    return (
      <View>
        <Text>Iron Fireaxe info</Text>

        <Text>Description:</Text>
        <Text>The Iron Fireaxe is a Tool that can be used to chop down trees and other items made from Wood, harvesting resources in the process. It can also serve as an effective melee Weapon.</Text>

        <Text>Uses:</Text>
        <Text>Harvesting. Using the primary click (default left mouse button) will swing the Iron Fireaxe, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to cut down trees or destroy blocks for resources. Harvesting most items or blocks will provide Resources with each swing. Fireaxes are the most effective tools for chopping down Trees and for damaging wood-based items and blocks such as Wood Blocks.</Text>
        <Text>When used in combat, the Iron Fireaxe is an effective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>
        <Text>Butchering. When harvesting a recently slain animal corpse, a gore block, or bones, the Iron Fireaxe acts as a Butcher Tool (similarly as Stone Axe and Steel Fireaxe), allowing you to obtain resources from the corpse that you would not get when using a tool that is not a designated Butcher Tool.</Text>

        <Text>Crafting:</Text>
        <Text>60 Forged Iron</Text>
        <Text>30 Wood</Text>
        <Text>6 Leather</Text>
        <Text>6 Duct Tape</Text>
        
        <Text>Unlock Options:</Text>
        <Text>Tools Digest</Text>
      </View>
    );
  }

export default IronFireaxeItem;