{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IndustrialLightItem({ navigation }) {
    return (
      <View>
        <Text>Industrial Light Info</Text>

        <Text>Description:</Text>
        <Text>"After placing this light you can turn it on and off" The Industrial Light is an electric light source. It requires power, and emits a white light. It is modeled as wall mounted light but can be placed on the ground. The light shines brightly, and is aimed down diagonally like a spotlight. Industrial Light will not stick to the sides of blocks with zero Structural Integrity, such as Sand.</Text>

        <Text>Crafting:</Text>
        <Text>4 Forge Iron</Text>
        <Text>4 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Wiring 101</Text>
      </View>
    );
  }

export default IndustrialLightItem;