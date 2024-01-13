{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PumpkinBreadItem({ navigation }) {
    return (
      <View>
        <Text>Pumpkin Bread Info</Text>

        <Text>Description:</Text>
        <Text>Pumpkin Bread is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Pumpkin Bread will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +12</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +6</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Pumpkin</Text>
        <Text>1 Water</Text>
        <Text>1 Corn Meal</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default PumpkinBreadItem;