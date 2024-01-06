{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function IronLegItem() {
    return (
      <View>
        <Text>Iron Leg Armor info</Text>

        <Text>Description:</Text>
        <Text>The Iron Leg Armor is an item of Clothing which can be crafted by the player and worn by their character as Armor to help protect them from physical damage.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>Unknown</Text>

        <Text>Crafting:</Text>
        <Text>45 Forged Iron</Text>
        <Text>15 Leather</Text>
        <Text>3 Duct Tape</Text>
        <Text>1 Sewing Kit</Text>

        <Text>Unlock Options:</Text>
        <Text>Armored Up</Text>
      </View>
    );
  }

export default IronLegItem;