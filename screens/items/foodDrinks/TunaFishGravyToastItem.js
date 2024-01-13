{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TunaFishGravyToastItem({ navigation }) {
    return (
      <View>
        <Text>Tuna Fish Gravy Toast Info</Text>

        <Text>Description:</Text>
        <Text>Tuna Fish Gravy Toast is a late-game food item. Eating Tuna Fish Gravy Toast will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text>Fullness: +90</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +40</Text>
        <Text>Health: +45</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Can of Tuna</Text>
        <Text>1 Corn Meal</Text>
        <Text>2 Corn Bread</Text>
        <Text>3 Animal Fat</Text>
        <Text>1 Can of Peas</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default TunaFishGravyToastItem;