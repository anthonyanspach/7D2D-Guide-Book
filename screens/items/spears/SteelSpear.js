{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelSpearItem({ navigation }) {
    return (
      <View>
        <Text>Steel Spear Info</Text>

        <Text>Description:</Text>
        <Text>The Steel Spear is a tier 3 Spear which can be used as a one-handed melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text>Crafting:</Text>
        <Text>5 Steel Spear Parts</Text>
        <Text>50 Forged Steel</Text>
        <Text>50 Wood</Text>
        <Text>15 Leather</Text>
        <Text>15 Duct Tape</Text>
      </View>
    );
  }

export default SteelSpearItem;