{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HazmatPantsItem() {
    return (
      <View>
        <Text>Hazmat Pants info</Text>

        <Text>Description:</Text>
        <Text>The Hazmat Pants is an item of Clothing which can not be crafted by the player and worn by their character as Apparel, providing a small boost to Heat and Cold Resistance.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>Unknown</Text>

        <Text>Crafting:</Text>
        <Text>Uncraftable</Text>

        <Text>Unlock Options:</Text>
        <Text>None/Only Found</Text>
      </View>
    );
  }

export default HazmatPantsItem;