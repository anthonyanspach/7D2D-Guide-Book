{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function YuccaJuiceSmoothieItem({ navigation }) {
    return (
      <View>
        <Text>Yucca Juice Smoothie Info</Text>

        <Text>Description:</Text>
        <Text>Yucca Juice Smoothie has a positive effect on the player's character's Fullness, Hydration, Stamina Regen, and Health. It is used to warm players up in the extremely cold winter biome. It can be crafted without the use of a campfire, and is extremely useful for players who can't craft or access warm clothing yet.</Text>

        <Text>Fullness: +22</Text>
        <Text>Hydration: +78</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: +11</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>
        <Text>Cold Resist: +30</Text>
        <Text>Duration: 06:00</Text>

        <Text>Crafting:</Text>
        <Text>4 Yucca Fruit</Text>
        <Text>4 Blueberries</Text>
        <Text>1 Snowball</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default YuccaJuiceSmoothieItem;