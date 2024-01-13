{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function YuccaJuiceItem({ navigation }) {
    return (
      <View>
        <Text>Yucca Juice Info</Text>

        <Text>Description:</Text>
        <Text>Yucca Juice is a Beverage that can be brewed on a Campfire with a suitable source of Combustible fuel. Yucca Juice has a positive effect on the player's character's hydration and stamina Regen.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +34</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>

        <Text>Crafting:</Text>
        <Text>1 Yucca Fruit</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default YuccaJuiceItem;