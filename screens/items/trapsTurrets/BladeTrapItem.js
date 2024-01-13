{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BladeTrapItem({ navigation }) {
    return (
      <View>
        <Text>Blade Trap Info</Text>

        <Text>Description:</Text>
        <Text>The Blade Trap has three spinning blades that chops players and zeds alike within a 3x3 'tile' area. It does not discriminate. It requires 20W of electricity to operate.</Text>

        <Text>Depending on the positioning of the blade will result in different outcomes. Placing the blade on the ground will chop of zombie legs; thus the zombies will become crawlers. On a 2 block high ceiling, the blade will chop off heads, resulting in an instant kill. Placing on a wall vertically is not recommended since zombies can hit it without taking damage but it can kill zombies most of the time.</Text>

        <Text>Crafting:</Text>
        <Text>15 Forged Iron</Text>
        <Text>15 Forged Steel</Text>
        <Text>12 Mechanical Parts</Text>
        <Text>9 Electrical Parts</Text>
        <Text>15 Oil</Text>

        <Text>Unlock Options:</Text>
        <Text>Electrical Traps</Text>
      </View>
    );
  }

export default BladeTrapItem;