{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrilledCornItem({ navigation }) {
    return (
      <View>
        <Text>Grilled Corn Info</Text>

        <Text>Description:</Text>
        <Text>Grilled Corn is a Food item that can be cooked using a Cooking Grill on a Campfire with a suitable source of Combustible fuel. Eating Grilled Corn will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: -5</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Ear of Corn</Text>

        <Text>Needed:</Text>
        <Text>Cooking Grill</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GrilledCornItem;