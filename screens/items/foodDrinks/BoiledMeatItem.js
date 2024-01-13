{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BoiledMeatItem({ navigation }) {
    return (
      <View>
        <Text>Boiled Meat Info</Text>

        <Text>Description:</Text>
        <Text>Boiled Meat is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Boiled Meat will have a positive effect on Fullness, Hydration, Stamina, and Health. It is not recommended to be used as a stable food source for players who do not have a good supply of Water, as Boiled Meat requires it to cook.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: +10</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: +15</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Raw Meat</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default BoiledMeatItem;