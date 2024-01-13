{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CharredMeatItem({ navigation }) {
    return (
      <View>
        <Text>Charred Meat Info</Text>

        <Text>Description:</Text>
        <Text>Charred Meat is a Food item that can be cooked using a Campfire with a suitable source of Combustible fuel. Eating Charred Meat will have a positive effect on Fullness, Stamina, and Health as well as a negative effect on Hydration.</Text>

        <Text>Fullness: +10</Text>
        <Text>Hydration: -5</Text>
        <Text>Stamina: +10</Text>
        <Text>Health: +5</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>5 Raw Meat</Text>
      </View>
    );
  }

export default CharredMeatItem;