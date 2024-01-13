{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BarbedFenceWireItem({ navigation }) {
    return (
      <View>
        <Text>Barbed Fence Wire Info</Text>

        <Text>Description:</Text>
        <Text>A Barbed Fence Wire is a craftable item which is commonly used to fortify a perimeter or to block breaches in walls during the night. Its main use is slowing down Zombies.</Text>

        <Text>A Barbed Fence Wire will reduce the speed of any player or Zombie walking through it and cause 1 point of damage to that entity. Each time the effect is triggered, the Barbed Fence Wire has its Durability reduced by 6. </Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
        <Text>8 Iron</Text>
      </View>
    );
  }

export default BarbedFenceWireItem;