{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronSpikesItem({ navigation }) {
    return (
      <View>
        <Text>Iron Spikes Info</Text>

        <Text>Description:</Text>
        <Text>Iron Spikes are traps used to defend structures by impaling zombies and/or players. Iron Spikes are crafted using 4 Forged Iron. They begin to lose durability after being stepped on by players or zombies and are eventually destroyed. They are often used to surround the parameter of a base or location. Iron Spikes will also slightly slow down zombies as they path through the Iron Spikes trap. Iron Spikes can be crafted or upgraded from Wood Spikes.</Text>

        <Text>Crafting:</Text>
        <Text>4 Forged Iron</Text>
      </View>
    );
  }

export default IronSpikesItem;