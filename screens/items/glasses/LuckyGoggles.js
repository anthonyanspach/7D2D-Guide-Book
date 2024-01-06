{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LuckyGogglesItem() {
    return (
      <View>
        <Text>Lucky Goggles info</Text>

        <Text>Description:</Text>
        <Text>Lucky Goggles provide the player with an increase of 3 to 5 Loot Stage allowing the player to find higher tier loot earlier in the game. It also reduces the number of blocks that must be dug within a treasure area to tighten the radius by 1..</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>Unknown</Text>

        <Text>Crafting:</Text>
        <Text>Uncraftable</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default LuckyGogglesItem;