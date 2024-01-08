{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronKnucklesItem({ navigation }) {
    return (
      <View>
        <Text>Iron Knuckles Info</Text>

        <Text>Description:</Text>
        <Text>The Iron Knuckles is a tier 2 brawling weapon used to pummel your enemies. While better than Knuckle Wraps it is not as good as Steel Knuckles</Text>

        <Text>Combat:</Text>
        <Text>During combat, Iron Knuckles function as a short range melee weapon. Using the primary click (default left mouse button) will punch with the Iron Knuckles, initiating a basic melee attack. Using the secondary click (default right mouse button) will initiate a power attack, doing more damage to your enemies.</Text>

        <Text>Crafting:</Text>
        <Text>36 Forged Iron</Text>
        <Text>12 Mechanical Parts</Text>
        <Text>6 Leather</Text>
        <Text>6 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Furious Fists</Text>
      </View>
    );
  }

export default IronKnucklesItem;