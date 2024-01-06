{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function SuitPantsItem() {
    return (
      <View>
        <Text>Suit Pants info</Text>

        <Text>Description:</Text>
        <Text>The Suit Pants is an item of Clothing which can be worn by a character as Apparel, providing a boost to Heat and Cold Resistance. They also offer 2.5% damage reduction if the player has read the Magnum Enforcer Vol.2 book.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>The Suit Pants has one Cosmetic Slot for dyes and one Modifier Slot.</Text>

        <Text>Crafting:</Text>
        <Text>Uncraftable</Text>

        <Text>Unlock Options:</Text>
        <Text>None/Only Found</Text>
      </View>
    );
  }

export default SuitPantsItem;