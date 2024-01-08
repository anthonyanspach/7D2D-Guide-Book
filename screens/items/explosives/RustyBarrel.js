{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RustyBarrelItem({ navigation }) {
    return (
      <View>
        <Text>Rusty Barrel Info</Text>

        <Text>Description:</Text>
        <Text>A Rusty Barrel is an Explosive lootable container found in various POIs such as a gas station. Using block-damaging weapons, the player can detonate Rusty Barrels. The explosion can detonate non-drivable vehicles and unlit Pipe Bombs or Stick of Dynamite.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default RustyBarrelItem;