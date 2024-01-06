{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BurningBarrelItem({ navigation }) {
    return (
      <View>
        <Text>Burning Barrel Info</Text>

        <Text>Description:</Text>
        <Text>A Burning Barrel is an item used to light dark areas, and an ingredient in the Chemistry Station. It can be crafted using the correct items, although it can be difficult to craft. A Burning Barrel requires resources that can be difficult to obtain for a new player.</Text>

        <Text>Visually, a Burning Barrel is just a Gas Barrel with a flame animation on top, similar to a Campfire. However, touching the flame does not cause Burning, and the Burning Barrel will not explode like a Gas Barrel. Like all furniture type blocks, it can be attached to a wall. Also unlike the Campfire, standing near it will not give you the Warming Fire buff. The Burning Barrel makes a constant crackling fire sound.</Text>

        <Text>Functionally, it is just a big Torch. Unlike a Torch though, the Burning Barrel is a solid block with a high Structural Integrity</Text>


        <Text>Usage:</Text>
        <Text>A Burning Barrel is used to provide light in dark areas and can be placed on almost any surface and will illuminate a small area around it. The player can move a Burning Barrel from one location to another at any time by picking it up using the E key. A Burning Barrel does not need any type of fuel and will burn indefinitely until either destroyed or extinguished by water.</Text>

        <Text>Crafting:</Text>
        <Text>3 Forged Iron</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default BurningBarrelItem;