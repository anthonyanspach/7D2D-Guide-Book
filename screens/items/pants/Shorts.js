{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ShortsItem() {
    return (
      <View>
        <Text>Shorts info</Text>

        <Text>Description:</Text>
        <Text>The Shorts is an item of Clothing which can be worn by a character as Apparel, providing a boost to Heat and Cold Resistance.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>The Shorts has one Cosmetic Slot for dyes and one Modifier Slot.</Text>

        <Text>Crafting:</Text>
        <Text>50 Cloth Fragments</Text>
        <Text>1 Sewing Kit</Text>

        <Text>Unlock Options:</Text>
        <Text>Needle & Thread Vol.4</Text>
      </View>
    );
  }

export default ShortsItem;