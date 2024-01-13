{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BoiledEggItem({ navigation }) {
    return (
      <View>
        <Text>Boiled Egg Info</Text>

        <Text>Description:</Text>
        <Text>A Boiled Egg is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating a Boiled Egg will have a positive effect on Fullness. However, the boost it gives is minimal and is not worth the use of a single jar of Bottled Water and fuel. Boiled Eggs are not recommended for a stable food source.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Egg</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>
      </View>
    );
  }

export default BoiledEggItem;