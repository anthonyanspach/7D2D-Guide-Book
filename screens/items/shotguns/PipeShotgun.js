{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeShotgunItem({ navigation }) {
    return (
      <View>
        <Text>Pipe Shotgun Info</Text>

        <Text>Description:</Text>
        <Text>The Pipe Shotgun is a single shot firearm that can be crafted from simple materials in 7 Days to Die. It is a simple weapon and easy to create relatively early in the game. This weapon requires shotgun shells and will hold one shot.</Text>

        <Text>Crafting:</Text>
        <Text>12 Short Iron Pipe</Text>
        <Text>6 Glue</Text>
        <Text>18 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Shotgun Weekly</Text>
      </View>
    );
  }

export default PipeShotgunItem;