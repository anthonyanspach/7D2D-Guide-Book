{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShamChowderItem({ navigation }) {
    return (
      <View>
        <Text>Sham Chowder Info</Text>

        <Text>Description:</Text>
        <Text>Sham Chowder is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Sham Chowder will have a positive effect on Fullness, Hydration, Stamina, and Health. Sham Chowder will increase Fortitude +1 for a 10 minute duration.</Text>

        <Text>Fullness: +53</Text>
        <Text>Hydration: +10</Text>
        <Text>Stamina: +30</Text>
        <Text>Health: +80</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Can of Sham</Text>
        <Text>1 Water</Text>
        <Text>2 Potatos</Text>
        <Text>2 Ear of Corn</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default ShamChowderItem;