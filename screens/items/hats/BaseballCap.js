{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function BaseballCapItem() {
    return (
      <View>
        <Text>Description:</Text>
        <Text>The Baseball Cap is an item of Clothing which can be worn by a character as Apparel, providing a boost to Heat and Cold Resistance. If the player has read the Batter Up Vol.2 book they get a 2.5% damage reduction.</Text>
        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>
        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>
        <Text>Modifier Slots</Text>
        <Text>The Baseball Cap has one Cosmetic Slot for dyes and one Modifier Slot.</Text>
        <Text>Crafting:</Text>
        <Text>50 Cloth Fragments</Text>
      </View>
    );
  }

export default BaseballCapItem;