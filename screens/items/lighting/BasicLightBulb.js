{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BasicLightBulbItem({ navigation }) {
    return (
      <View>
        <Text>Basic Light Bulb Info</Text>

        <Text>Description:</Text>
        <Text>The Basic Light Bulb is an electric light source. It requires power and emits light. Basic Light Bulb will not stick to the sides of blocks with zero Structural Integrity, such as Sand. It requires 5 watts to power.</Text>

        <Text>Crafting:</Text>
        <Text>2 Forged Iron</Text>
        <Text>4 Electrical Parts</Text>
        <Text>1 Headlight</Text>

        <Text>Unlock Options:</Text>
        <Text>Wiring 101</Text>
      </View>
    );
  }

export default BasicLightBulbItem;