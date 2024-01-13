{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteakPotatoMealItem({ navigation }) {
    return (
      <View>
        <Text>Steak and Potato Meal Info</Text>

        <Text>Description:</Text>
        <Text>Steak and Potato Meal is a Food item that can be cooked using a Cooking Grill on a Campfire with a suitable source of Combustible fuel. Eating Steak and Potato Meal will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +50</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +25</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Raw Meat</Text>
        <Text>2 Potatos</Text>
        <Text>2 Mushrooms</Text>
        <Text>1 Animal Fat</Text>

        <Text>Needed:</Text>
        <Text>Cooking Grill</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default SteakPotatoMealItem;