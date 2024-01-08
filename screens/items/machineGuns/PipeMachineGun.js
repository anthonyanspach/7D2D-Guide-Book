{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeMachineGunItem({ navigation }) {
    return (
      <View>
        <Text>Pipe Machine Gun Info</Text>

        <Text>Description:</Text>
        <Text>Pipe Machine Gun is a short to medium ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the Pipe Machine Gun uses 7.62mm Rounds as Ammunition.</Text>

        <Text>Crafting:</Text>
        <Text>12 Short Iron Pipe</Text>
        <Text>6 Glue</Text>
        <Text>18 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Tactical Warfare</Text>
      </View>
    );
  }

export default PipeMachineGunItem;