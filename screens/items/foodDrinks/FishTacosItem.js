{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FishTacosItem({ navigation }) {
    return (
      <View>
        <Text>Fish Tacos Info</Text>

        <Text>Description:</Text>
        <Text>Fish Tacos is a Food item that can be cooked using a Cooking Grill on a Campfire with a suitable source of Combustible fuel. Eating Fish Tacos will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +46</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +30</Text>
        <Text>Health: +40</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Can of Salmon</Text>
        <Text>2 Corn Meal</Text>

        <Text>Needed:</Text>
        <Text>Cooking Grill</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default FishTacosItem;