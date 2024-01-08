{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FluorescentLightItem({ navigation }) {
    return (
      <View>
        <Text>Fluorescent Light Info</Text>

        <Text>Description:</Text>
        <Text>The Fluorescent Light is an electric light source. It requires power, and emits a light. It is modeled as ceiling mounted light but can be placed on the ground or walls. The light shines brightly. Fluorescent Light will not stick to the sides of blocks with zero Structural Integrity, such as Sand.</Text>

        <Text>Crafting:</Text>
        <Text>2 Forged Iron</Text>
        <Text>4 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Wiring 101</Text>
      </View>
    );
  }

export default FluorescentLightItem;