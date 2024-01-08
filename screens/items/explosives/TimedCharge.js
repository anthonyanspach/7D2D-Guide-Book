{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TimedChargeItem({ navigation }) {
    return (
      <View>
        <Text>Timed Charge Info</Text>

        <Text>Description:</Text>
        <Text>A Timed Charge is a Explosive box-shaped charge that applies highly concentrated damage and automatically detonates after 4 seconds. It seems to do a greatly reduced amount of damage when used on regular blocks, so these valuable, yet cheap explosives should be reserved for locked safes, crates and any other container that may be, including player-built storage.</Text>

        <Text>Crafting:</Text>
        <Text>20 Iron</Text>
        <Text>10 Gun Powder</Text>
        <Text>1 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default TimedChargeItem;