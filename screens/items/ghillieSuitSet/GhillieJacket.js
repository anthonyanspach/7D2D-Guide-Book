{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function GhillieJacketItem() {
    return (
      <View>
        <Text>Ghillie Jacket info</Text>

        <Text>Description:</Text>
        <Text>Ghillie Suit Jacket is a piece of clothing that, in addition to heat and cold resist, provides the player with decreased visibility. It is part of the Ghillie Suit with Ghillie Suit Hood and Ghillie Suit Pants. The decreased visibility is based both on vision and reduced noise on the jacket. The Ghillie Suit Jacket has one mod slot, a shared property with apparel overcoats.</Text>

        <Text>Quality and Durability:</Text>
        <Text>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text>Cold and Heat Resistance:</Text>
        <Text>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text>Modifier Slots:</Text>
        <Text>Unknown</Text>

        <Text>Crafting:</Text>
        <Text>50 Plant Fibers</Text>
        <Text>1 Sewing Kit</Text>

        <Text>Unlock Options:</Text>
        <Text>Sniper Complete</Text>
      </View>
    );
  }

export default GhillieJacketItem;