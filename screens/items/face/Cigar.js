{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function CigarItem() {
    return (
      <View>
        <Text>Cigar info</Text>

        <Text>Description:</Text>
        <Text>A Cigar is a piece of Clothing that players can craft, loot, or purchase from Traders to equip their characters. While it doesn't provide damage protection, wearing a Cigar grants one attribute point to Strength and boosts Bartering by 10%, improving both buying and selling.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>Unknown</Text>

        <Text>Crafting:</Text>
        <Text>250 Plant Fibers</Text>
        <Text>1 Paper</Text>
        <Text>1 Testosterone Extract</Text>

        <Text>Unlock Options:</Text>
        <Text>Urban Combat Vol.2</Text>
      </View>
    );
  }

export default CigarItem;