{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StoneSpearItem({ navigation }) {
    return (
      <View>
        <Text>Stone Spear Info</Text>

        <Text>Description:</Text>
        <Text>The Stone Spear is a tier 1 Spear which can be used as a one-handed melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text>Crafting:</Text>
        <Text>5 Small Stone</Text>
        <Text>3 Plant Fibers</Text>
        <Text>3 Wood</Text>
      </View>
    );
  }

export default StoneSpearItem;