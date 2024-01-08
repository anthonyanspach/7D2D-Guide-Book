{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SMGItem({ navigation }) {
    return (
      <View>
        <Text>SMG Info</Text>

        <Text>Description:</Text>
        <Text>An SMG-5 (sub-machine gun) is a rapid fire ranged weapon, which can be crafted or found throughout the world of 7 Days to Die in containers, such as weapon bags, Gun Safes, Crates, and Loot bags. The SMG uses 9mm Ammo and will hold ~28 bullets. Despite being called a sub-machine gun, it uses the Agility statistic shared with Pistol style perks instead, since it uses 9mm Ammo.</Text>

        <Text>Crafting:</Text>
        <Text>5 Handgun Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>15 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Handgun Magazine</Text>
      </View>
    );
  }

export default SMGItem;