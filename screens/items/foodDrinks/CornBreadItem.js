{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CornBreadItem({ navigation }) {
    return (
      <View>
        <Text>Corn Bread Info</Text>

        <Text>Description:</Text>
        <Text>Corn Bread is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Corn Bread will have a positive effect on the player's Fullness.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Corn Meal</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default CornBreadItem;