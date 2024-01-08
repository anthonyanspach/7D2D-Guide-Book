{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IndustrialLightBlubItem({ navigation }) {
    return (
      <View>
        <Text>Industrial Light Bulb Info</Text>

        <Text>Description:</Text>
        <Text>Provides light when hooked up to a power source like a Generator or Battery Bank. Use the Wiring Tool to connect a power source to the Industrial Light Bulb and you should be able to turn it on. Repair with Forged Iron and Electrical Parts.</Text>

        <Text>Crafting:</Text>
        <Text>4 Forged Iron</Text>
        <Text>4 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Wiring 101</Text>
      </View>
    );
  }

export default IndustrialLightBlubItem;