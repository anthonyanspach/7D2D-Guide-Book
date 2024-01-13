{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ElectricFencePostItem({ navigation }) {
    return (
      <View>
        <Text>Electrical Fence Post Info</Text>

        <Text>Description:</Text>
        <Text>The Electric Fence Post shocks players as well as the player that placed the traps regardless them being within Land Claim Block territory and Zombies who touch the wire between two connected posts. The wires can go through any block. The maximum distance between 2 posts is 14 blocks, not counting the blocks the posts stand on.</Text>

        <Text>Crafting:</Text>
        <Text>7 Forged Iron</Text>
        <Text>3 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Electrical Traps</Text>
      </View>
    );
  }

export default ElectricFencePostItem;