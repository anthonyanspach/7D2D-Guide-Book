{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PumkinPieItem({ navigation }) {
    return (
      <View>
        <Text>Pumpkin Pie Info</Text>

        <Text>Description:</Text>
        <Text>Pumpkin Pie is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Pumpkin Pie will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +50</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +25</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>2 Pumpkins</Text>
        <Text>1 Water</Text>
        <Text>1 Egg</Text>
        <Text>1 Corn Meal</Text>
        <Text>1 Animal Fat</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default PumkinPieItem;