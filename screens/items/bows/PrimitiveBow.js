{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PrimitiveBowItem({ navigation }) {
    return (
      <View>
        <Text>Primitive Bow Info</Text>

        <Text>Description:</Text>
        <Text>The Primitive Bow is a craftable weapon in 7 Days to Die.</Text>
        <Text>It is a medium-range weapon that fires arrows as Ammunition. A Primitive Bow can be used with five different types of arrows: Stone Arrow, Iron Arrow, Steel Arrow, Flaming Arrow, and Exploding Arrow.</Text>
        <Text>It is considered as a starter weapon, because the player can craft it right at the beginning of his game and because of its low cost to craft.</Text>
        <Text>To equip a different type of ammo than the default stone arrows, press and hold R, then select the ammo type you want.</Text>
        <Text>Sneaking attack increases 100% extra damage in A21.</Text>

        <Text>Crafting:</Text>
        <Text>3 Plant Fibers</Text>
        <Text>8 Wood</Text>
      </View>
    );
  }

export default PrimitiveBowItem;