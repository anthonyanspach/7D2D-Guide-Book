{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function A44DesertVultureItem({ navigation }) {
    return (
      <View>
        <Text>.44 Desert Vulture Info</Text>

        <Text>Description:</Text>
        <Text>A .44 Desert Vulture requires the .44 Magnum Bullet and will hold ~9 cartridges.</Text>

        <Text>Crafting:</Text>
        <Text>5 Hundgun Parts</Text>
        <Text>100 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>100 Scrap Polymers</Text>
        <Text>30 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Handgun Magazine</Text>
      </View>
    );
  }

export default A44DesertVultureItem;