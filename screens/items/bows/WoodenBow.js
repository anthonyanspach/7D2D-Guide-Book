{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenBowItem({ navigation }) {
    return (
      <View>
        <Text>Wooden Bow Info</Text>

        <Text>Description:</Text>
        <Text>The Wooden Bow is the second craftable bow in 7 Days to Die. It is a medium-range weapon that fires arrows as ammunition. Wooden Bow can be used with five different types of arrows: Stone Arrow, Iron Arrow, Steel Arrow, Flaming Arrow, and Exploding Arrow. To equip a different type of ammo than the default stone arrows, press and hold R, then select the ammo type you want. The damages given are based on values of the different types of arrows that the bow can use. The bow itself (without arrows) can not cause any damage.</Text>

        <Text>Sneaking attack increases 100% extra damage in A21.</Text>

        <Text>Crafting:</Text>
        <Text>5 Bow / Crossbow Parts</Text>
        <Text>100 Wood</Text>
        <Text>15 Leather</Text>
        <Text>10 Glue</Text>
        <Text>15 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Bow Hunters</Text>
      </View>
    );
  }

export default WoodenBowItem;