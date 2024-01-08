{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PistolItem({ navigation }) {
    return (
      <View>
        <Text>Pistol Info</Text>

        <Text>Description:</Text>
        <Text>A Pistol is a short to medium range semi-automatic handgun, which can be crafted or found throughout the world of 7 Days to Die in containers, such as weapon bags, gun safes, toilets, and loot bags.</Text>
        <Text>The Pistol requires 9mm Rounds and will hold ~15 bullets. It reloads automatically, if the correct Ammunition is available. It can also be reloaded manually at any time using the reload key (defaults to R).</Text>

        <Text>Crafting:</Text>
        <Text>5 Handgun Parts</Text>
        <Text>50 Forged Iron</Text>
        <Text>10 Duct Tape</Text>
        <Text>25 Scrap Polymers</Text>
        <Text>10 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Handgun Magazine</Text>
      </View>
    );
  }

export default PistolItem;