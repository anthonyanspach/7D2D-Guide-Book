{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PumpShotgunItem({ navigation }) {
    return (
      <View>
        <Text>Pump Shotgun Info</Text>

        <Text>Description:</Text>
        <Text>The Pump Shotgun is a pump-action firearm that can be found/looted or crafted in 7 Days to Die. The Shotgun can use either Shotgun Shells or Shotgun Slugs as Ammunition and when empty will reload automatically or manually using the reload key (default key 'R').</Text>

        <Text>Crafting:</Text>
        <Text>5 Shotgun Parts</Text>
        <Text>75 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>100 Scrap Polymers</Text>
        <Text>15 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Shotgun Weekly</Text>
      </View>
    );
  }

export default PumpShotgunItem;