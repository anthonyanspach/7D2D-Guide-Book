{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BlueberryPieItem({ navigation }) {
    return (
      <View>
        <Text>Blueberry Pie Info</Text>

        <Text>Description:</Text>
        <Text>Blueberry Pie is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating a Blueberry Pie will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +45</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +22</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Blueberries</Text>
        <Text>1 Egg</Text>
        <Text>1 Corn Meal</Text>
        <Text>1 Animal Fat</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default BlueberryPieItem;