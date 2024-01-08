{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function AK47MachineGunItem({ navigation }) {
    return (
      <View>
        <Text>AK47 Machine Gun Info</Text>

        <Text>Description:</Text>
        <Text>The AK-47 is a short- to medium-ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the AK-47 uses 7.62mm Rounds as Ammunition. Previously named the AK-47 Assault Rifle and classified as a rifle, the AK-47 is now considered a machine gun in terms of Perks. It has the highest damage output potential out of all the conventional firearms, that lends the AK 47 well to being the player's backup gun to defend against surprise threats while scavenging or collecting resources.</Text>

        <Text>Crafting:</Text>
        <Text>5 Machine Gun Parts</Text>
        <Text>50 Forged Iron</Text>
        <Text>10 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>10 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Tactical Warfare</Text>
      </View>
    );
  }

export default AK47MachineGunItem;