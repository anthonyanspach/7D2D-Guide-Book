{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronCrossbowItem({ navigation }) {
    return (
      <View>
        <Text>Iron Crossbow Info</Text>

        <Text>Description:</Text>
        <Text>The Iron Crossbow is a craftable weapon in 7 Days to Die. It is unlocked after attaining level 1 Archery or reading the Crossbow Schematic.</Text>
        <Text>The Iron Crossbow is a medium to long-range weapon that fires crossbow bolts as Ammunition. It will reload automatically after each shot and, unlike the bows, it can be modded with Scope or Weapon Flashlight.</Text>
        <Text>To equip a different type of ammo than the default Stone Crossbow Bolt, press and hold R, then select the ammo type you want.</Text>

        <Text>Crafting:</Text>
        <Text>5 Bow / Crossbow Parts</Text>
        <Text>75 Forged Iron</Text>
        <Text>15 Duct Tape</Text>
        <Text>15 Leather</Text>
        <Text>100 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Bow Hunters</Text>
      </View>
    );
  }

export default IronCrossbowItem;