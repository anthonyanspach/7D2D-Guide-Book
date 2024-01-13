{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GoldenrodTeaItem({ navigation }) {
    return (
      <View>
        <Text>Goldenrod Tea Info</Text>

        <Text>Description:</Text>
        <Text>Goldenrod Tea is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Drinking Goldenrod Tea will have a positive effect on your Hydration and Stamina Regen. It can also be used to cure the early stages of Dysentery, however, Goldenrod Tea cannot cure advanced dysentery.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +24</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>

        <Text>Cures:</Text>
        <Text>Dysentery</Text>

        <Text>Crafting:</Text>
        <Text>1 Goldenrod Flower</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GoldenrodTeaItem;