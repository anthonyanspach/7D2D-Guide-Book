{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MeatStewItem({ navigation }) {
    return (
      <View>
        <Text>Meat Stew Info</Text>

        <Text>Description:</Text>
        <Text>Meat Stew is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Meat Stew will have a positive effect on Fullness, Hydration, Stamina, and Health. It is an effective mid-game level of food as it gives a great boost towards all stats. However, its ingredients are mainly composed of a mixture of hunting and farming.</Text>

        <Text>Fullness: +50</Text>
        <Text>Hydration: +20</Text>
        <Text>Stamina: +20</Text>
        <Text>Health: +25</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Raw Meat</Text>
        <Text>1 Water</Text>
        <Text>2 Potatos</Text>
        <Text>2 Ear of Corn</Text>
        <Text>1 Animal Fat</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default MeatStewItem;