{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ChiliDogItem({ navigation }) {
    return (
      <View>
        <Text>Chili Dog Info</Text>

        <Text>Description:</Text>
        <Text>Chili Dog is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Chili Dog will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +53</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +30</Text>
        <Text>Health: +30</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Raw Meat</Text>
        <Text>1 Can of Chili</Text>
        <Text>1 Corn Bread</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default ChiliDogItem;