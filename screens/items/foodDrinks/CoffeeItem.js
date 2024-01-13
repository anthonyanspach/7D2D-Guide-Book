{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CoffeeItem({ navigation }) {
    return (
      <View>
        <Text>Coffee Info</Text>

        <Text>Description:</Text>
        <Text>Coffee is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Coffee activates the buff Caffeine Buzz, which increases stamina regeneration by 20% per second and increase hypothermal Resist by 5.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +24</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +20%</Text>
        <Text>Cold Resist: +5</Text>
        <Text>Duration: 03:00</Text>

        <Text>Crafting:</Text>
        <Text>1 Coffee Beans</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default CoffeeItem;