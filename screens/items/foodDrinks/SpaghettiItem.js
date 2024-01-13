{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SpeghettiItem({ navigation }) {
    return (
      <View>
        <Text>Speghetti Info</Text>

        <Text>Description:</Text>
        <Text>Spaghetti is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Spaghetti will have a positive effect on Fullness, Stamina, and Health. It is an incredibly effective late-game level of food as it gives a great boost towards most stats. However, its ingredients are mainly composed of a mixture of looting and farming.</Text>

        <Text>Fullness: +122</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +40</Text>
        <Text>Health: +61</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Large Beef Ration</Text>
        <Text>1 Water</Text>
        <Text>1 Can of Pasta</Text>
        <Text>1 Mushroom</Text>
        <Text>3 Animal Fat</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default SpeghettiItem;