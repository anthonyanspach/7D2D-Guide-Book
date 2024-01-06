{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HuntingKnifeItem() {
    return (
      <View>
        <Text>Hunting Knife info</Text>

        <Text>Description:</Text>
        <Text>The Hunting Knife is a bladed melee weapon that is also quite useful as a butchering tool. -Sneaking attack increases 400% extra damage in A21.-</Text>

        <Text>Uses:</Text>
        <Text>When used in combat, a Hunting Knife is an effective, short range Melee weapon.</Text>
        <Text>Butchering. Clicking the left mouse button will use the Hunting Knife, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Hunting Knife is an effective tool for butchering dead animals.</Text>

        <Text>Crafting:</Text>
        <Text>24 Forged Iron</Text>
        <Text>12 Wood</Text>
        <Text>6 Leather</Text>
        <Text>6 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Knife Guy</Text>
      </View>
    );
  }

export default HuntingKnifeItem;