{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ReinforcedDrawbridgePoweredItem({ navigation }) {
    return (
      <View>
        <Text>Reinforced Drawbridge Info</Text>

        <Text>Description:</Text>
        <Text>The Reinforced Drawbridge -Powered- is nearly identical to the Reinforced Drawbridge. The main exception being that the Powered variant requires a power source and something like a switch to operate it.</Text>

        <Text>Crafting:</Text>
        <Text>31 Forged Iron</Text>
        <Text>31 Wood</Text>
        <Text>31 Springs</Text>
        <Text>31 Mechanical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Wiring 101</Text>
      </View>
    );
  }

export default ReinforcedDrawbridgePoweredItem;