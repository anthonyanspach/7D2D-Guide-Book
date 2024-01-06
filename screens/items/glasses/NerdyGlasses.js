{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function NerdyGlassesItem() {
    return (
      <View>
        <Text>Nerdy Glasses info</Text>

        <Text>Description:</Text>
        <Text>"Wearing these nerdy glasses might not help your sex appeal but you get better at crafting and gain extra XP." Nerdy Glasses are a type of Clothing that don't provide the player protection. They do, however, provide one attribute point to Intellect. In addition, they increase the player's experience gain by 10% and reduce crafting times by 10%.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>The Nerdy Glasses has one Cosmetic Slot for dyes.</Text>

        <Text>Crafting:</Text>
        <Text>Uncraftable</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default NerdyGlassesItem;