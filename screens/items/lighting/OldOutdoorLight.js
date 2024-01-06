{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function OldOutdoorLightItem({ navigation }) {
    return (
      <View>
        <Text>Old Outdoor Light</Text>

        <Text>Description:</Text>
        <Text>"After placing this light you can turn it on and off" The Old Outdoor Light is an electric light source. It requires power, and emits a white light. It is modeled as wall mounted light but can be placed on the ground. The light shines brightly, and it also creates an interesting pattern with the bars on the cage of the light. Old Outdoor Light will not stick to the sides of blocks with zero Structural Integrity like Sand</Text>

        <Text>Crafting:</Text>
        <Text>2 Forged Iron</Text>
        <Text>6 Electrical Parts</Text>
      </View>
    );
  }

export default OldOutdoorLightItem;