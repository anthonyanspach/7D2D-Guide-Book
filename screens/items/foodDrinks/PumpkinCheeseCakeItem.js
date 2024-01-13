{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PumpkinCheeseCakeItem({ navigation }) {
    return (
      <View>
        <Text>Pumpkin Cheese Cake Info</Text>

        <Text>Description:</Text>
        <Text>Pumpkin Cheesecake is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Pumpkin Cheesecake will have a positive effect on Fullness, Stamina, and Health. Consuming Pumpkin Cheesecake will give the player a +5% Bartering buff that lasts 5 minutes. Unlike most other buffs to bartering this only affects buying items rather than both buying and selling.</Text>

        <Text>Fullness: +42</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +21</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Pumpkin</Text>
        <Text>1 Egg</Text>
        <Text>1 Corn Meal</Text>
        <Text>1 Animal Fat</Text>
        <Text>1 Beer</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default PumpkinCheeseCakeItem;