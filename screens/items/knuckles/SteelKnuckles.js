{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelKnucklesItem({ navigation }) {
    return (
      <View>
        <Text>Steel Knuckles Info</Text>

        <Text>Description:</Text>
        <Text>The Steel Knuckles is a tier 3 brawling weapon used to pummel your enemies.</Text>

        <Text>Combat:</Text>
        <Text>During combat, Steel Knuckles is a short-range melee weapon. Left-clicking performs a basic melee attack, while right-clicking initiates a power attack, dealing more damage to enemies.</Text>

        <Text>Crafting:</Text>
        <Text>5 Steel Knuckles Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>15 Leather</Text>
        <Text>15 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Furious Fists</Text>
      </View>
    );
  }

export default SteelKnucklesItem;