{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ReinforcedDrawbridgeItem({ navigation }) {
    return (
      <View>
        <Text>Reinforced Drawbridge Info</Text>

        <Text>Description:</Text>
        <Text>A Reinforced Drawbridge is a craftable Drawbridge that has the ability to be raised or lowered by the player. This creates many exciting opportunities for base construction and defense. The Reinforced Drawbridge is now five blocks wide and six blocks long when lowered, excluding the blocks that support the base.</Text>

        <Text>Crafting:</Text>
        <Text>100 Forged Iron</Text>
        <Text>2000 Wood</Text>
        <Text>20 Springs</Text>
        <Text>30 Mechanical Parts</Text>
      </View>
    );
  }

export default ReinforcedDrawbridgeItem;