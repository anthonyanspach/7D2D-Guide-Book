{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HuntingRifleItem({ navigation }) {
    return (
      <View>
        <Text>Hunting Rifle Info</Text>

        <Text>Description:</Text>
        <Text>A Hunting Rifle is a medium to long range bolt action firearm which can be found throughout the world in 7 Days to Die. It is an uncommon weapon but it's craftable. This weapon requires the 7.62mm Bullet and only holds one cartridge at a time. It will reload automatically if the player is carrying the correct Ammunition or it can be done manually at any time using the reload key (default key R ).</Text>

        <Text>Crafting:</Text>
        <Text>5 Rifle Parts</Text>
        <Text>50 Forged Iron</Text>
        <Text>10 Duct Tape</Text>
        <Text>50 Scrap Polymers</Text>
        <Text>10 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Rifle World</Text>
      </View>
    );
  }

export default HuntingRifleItem;