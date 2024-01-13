{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrilledMeatItem({ navigation }) {
    return (
      <View>
        <Text>Grilled Meat Info</Text>

        <Text>Description:</Text>
        <Text>Grilled Meat is a Food item that can be cooked using a Cooking Grill on a Campfire with a suitable source of Combustible fuel. Eating Grilled Meat will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Raw Meat</Text>

        <Text>Needed:</Text>
        <Text>Cooking Grill</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GrilledMeatItem;