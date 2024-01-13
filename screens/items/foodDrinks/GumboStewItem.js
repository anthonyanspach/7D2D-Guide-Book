{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GumboStewItem({ navigation }) {
    return (
      <View>
        <Text>Gumbo Stew Info</Text>

        <Text>Description:</Text>
        <Text>Gumbo Stew is a high-tier Food item that restores player's food and health. It can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Gumbo Stew will have a positive effect on Fullness, Hydration, Stamina, and Health.</Text>

        <Text>Fullness: +112</Text>
        <Text>Hydration: +20</Text>
        <Text>Stamina: +40</Text>
        <Text>Health: +56</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Large Beef Ration</Text>
        <Text>1 Can of Peas</Text>
        <Text>1 Can of Stock</Text>
        <Text>3 Animal Fat</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GumboStewItem;