{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RocketLauncherItem({ navigation }) {
    return (
      <View>
        <Text>Rocket Launcher Info</Text>

        <Text>Description:</Text>
        <Text>The Rocket Launcher is a type of weapon in 7 Days to Die. It uses Rockets as ammunition (which are rare to find). It will reload automatically, but can also be manually reloaded by pressing the (R) key.</Text>

        <Text>Crafting:</Text>
        <Text>5 Rocket Launcher Parts</Text>
        <Text>100 Forged Steel</Text>
        <Text>15 Duct Tape</Text>
        <Text>25 Electrical Parts</Text>
        <Text>15 Springs</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default RocketLauncherItem;