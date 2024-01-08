{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function KnuckleWrapsItem({ navigation }) {
    return (
      <View>
        <Text>Knuckle Wraps Info</Text>

        <Text>Description:</Text>
        <Text>The Knuckle Wraps is a tier 1 brawling weapon used to pummel your enemies.</Text>

        <Text>Combat:</Text>
        <Text>During combat, Knuckle Wraps function as a short range melee weapon. Using the primary click (default left mouse button) will punch with the Knuckle Wraps, initiating a basic melee attack. Using the secondary click (default right mouse button) will initiate a power attack, doing more damage to your enemies.</Text>

        <Text>Crafting:</Text>
        <Text>6 Iron</Text>
        <Text>2 Leather</Text>

        <Text>Unlock Options:</Text>
        <Text>Furious Fists</Text>
      </View>
    );
  }

export default KnuckleWrapsItem;