{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function M60MachineGunItem({ navigation }) {
    return (
      <View>
        <Text>M60 Machine Gun Info</Text>

        <Text>Description:</Text>
        <Text>M60 Machine Gun is a short- to medium-ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the M60 uses 7.62mm Rounds as Ammunition.</Text>

        <Text>Crafting:</Text>
        <Text>5 Machine Gun Parts</Text>
        <Text>100 Forged Steel</Text>
        <Text>115 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>20 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Tactical Warfare</Text>
      </View>
    );
  }

export default M60MachineGunItem;