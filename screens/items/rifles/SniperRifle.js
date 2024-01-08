{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SniperRifleItem({ navigation }) {
    return (
      <View>
        <Text>Sniper Rifle Info</Text>

        <Text>Description:</Text>
        <Text>The Sniper Rifle is a ranged weapon in 7 Days to Die. It can be looted from Supply Crates, Shotgun Messiah Crates and Munitions Boxes or it can also be crafted. The Sniper Rifle uses 7.62mm Bullets as Ammunition and can hold ~12 rounds. A Sniper Rifle will reload automatically or it can be done manually by pressing the reload key (default key 'R').</Text>

        <Text>Crafting:</Text>
        <Text>5 Rifle Parts</Text>
        <Text>150 Forged Steel</Text>
        <Text>50 Duct Tape</Text>
        <Text>200 Scrap Polymers</Text>
        <Text>60 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Rifle World</Text>
      </View>
    );
  }

export default SniperRifleItem;