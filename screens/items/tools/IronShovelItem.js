{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function IronShovelItem() {
    return (
      <View>
        <Text>Iron Shovel info</Text>

        <Text>Description:</Text>
        <Text>The Iron Shovel is a Tool that can be used to dig into the earth, creating holes in the ground and harvesting resources in the process. It can also serve as a weak melee Weapon in a pinch.</Text>

        <Text>Uses:</Text>
        <Text>Harvesting. Using the primary click (default left mouse button) will dig with the Iron Shovel, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to dig into the earth, harvesting Resources with each use. Shovels are the most effective tools for harvesting soft earth-based blocks such as Gravel, Clay Soil, Sand, Snow, or Forest Ground. Shovels are also the most effective tools for harvesting Cobblestone Rocks and Cement from the Pallets found in various POIs.</Text>
        <Text>When used in combat, the Iron Shovel is a very ineffective, short range Melee weapon. Due to lack of perk influence on this tool, it only gets the basic damage and dismember chance bonus from Strength attribute.</Text>

        <Text>Crafting:</Text>
        <Text>48 Forged Iron</Text>
        <Text>30 Wood</Text>
        <Text>6 Leather</Text>
        <Text>6 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Tools Digest</Text>
      </View>
    );
  }

export default IronShovelItem;