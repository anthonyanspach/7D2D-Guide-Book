{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrandpaLearnElixirItem({ navigation }) {
    return (
      <View>
        <Text>Grandpa's Learn'n Elixir Info</Text>

        <Text>Description:</Text>
        <Text>Gives the player 20% additional experience gain for 6 minutes.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Exp Gain: +20%</Text>
        <Text>Duration: 06:00</Text>

        <Text>Crafting:</Text>
        <Text>2 Can of Dog Food</Text>
        <Text>2 Red Tea</Text>
        <Text>1 Bottle of Acid</Text>
        <Text>1 Bear</Text>
        <Text>1 Ear of Super Corn</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GrandpaLearnElixirItem;