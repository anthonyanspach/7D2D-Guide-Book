{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function VegetableStewItem({ navigation }) {
    return (
      <View>
        <Text>Vegetable Stew Info</Text>

        <Text>Description:</Text>
        <Text>Vegetable Stew is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Vegetable Stew will have a positive effect on Fullness, Hydration, Stamina, and Health.</Text>

        <Text>Fullness: +31</Text>
        <Text>Hydration: +20</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +15</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>2 Potatos</Text>
        <Text>2 Ear of Corn</Text>
        <Text>2 Mushrooms</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default VegetableStewItem;