{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AutoShotgunItem({ navigation }) {
    return (
      <View>
        <Text>Auto Shotgun Info</Text>

        <Text>Description:</Text>
        <Text>Automatic Shotgun is a tier 3 shotgun, after Double Barrel and Pump shotguns.</Text>

        <Text>Crafting:</Text>
        <Text>5 Shotgun Parts</Text>
        <Text>150 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>15 Duct Tape</Text>
        <Text>200 Scrap Polymers</Text>
        <Text>20 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Shotgun Weekly</Text>
      </View>
    );
  }

export default AutoShotgunItem;