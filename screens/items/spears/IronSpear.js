{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronSpearItem({ navigation }) {
    return (
      <View>
        <Text>Iron Spear Info</Text>

        <Text>Description:</Text>
        <Text>The Iron Spear is a tier 2 Spear which can be used as a melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text>Crafting:</Text>
        <Text>48 Forged Iron</Text>
        <Text>30 Wood</Text>
        <Text>6 Leather</Text>
        <Text>6 Duct Tape</Text>
      </View>
    );
  }

export default IronSpearItem;