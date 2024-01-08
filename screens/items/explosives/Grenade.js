{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrenadeItem({ navigation }) {
    return (
      <View>
        <Text>Grenade Info</Text>

        <Text>Description:</Text>
        <Text>A Grenade is a throwable Explosive weapon good for damaging groups of Zombies or other players. Once primed and thrown or dropped the Grenade will detonate within a few seconds. For an alternate option to the Grenade is the Contact Grenade which detonates on contact rather than a timer.</Text>

        <Text>Crafting:</Text>
        <Text>1 Mechanical Part</Text>
        <Text>14 Gun Powder</Text>
        <Text>4 Forged Iron</Text>
        <Text>1 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default GrenadeItem;