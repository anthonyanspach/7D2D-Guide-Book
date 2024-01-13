{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BlackstrapCoffeeItem({ navigation }) {
    return (
      <View>
        <Text>Blackstrap Coffee Info</Text>

        <Text>Description:</Text>
        <Text>Blackstrap Coffee is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Drinking Blackstrap Coffee will add Blackstrap Coffee (Buff) for 6 minutes. This buff stacks for up to 18 minutes (3x Blackstrap Coffee). Requires Art of Mining Vol. 4 to craft.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +24</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +25%</Text>
        <Text>Cold Resist: +10</Text>
        <Text>Duration: 06:00</Text>

        <Text>Crafting:</Text>
        <Text>1 Coffee Beans</Text>
        <Text>1 Water</Text>
        <Text>5 Gun Powder</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>The Art of Mining Vol.4</Text>
      </View>
    );
  }

export default BlackstrapCoffeeItem;