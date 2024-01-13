{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RedTeaItem({ navigation }) {
    return (
      <View>
        <Text>Red Tea Info</Text>

        <Text>Description:</Text>
        <Text>Red Tea is a Beverage that can be brewed using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Drinking Red Tea will have a positive effect on your Hydration and Stamina Regen. It gives 15% Efficient Digestion for 6 minutes.</Text>

        <Text>Red Tea is especially useful in the early and mid game, as it not only grants an additional 4 Hydration, but its buff makes Fullness and Hydration drain 15% slower when regenerating Stamina. This makes one's food supplies last a bit longer, additionally saving Water for crafting Glue. Plus, Red Tea is easy to obtain; Chrysanthemum Flowers are abundant in the Forest and its recipe is unlocked early on in the Food skill progression.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: +24</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Stamina Regen: +15%</Text>
        <Text>Water and Food Loss: -15%</Text>
        <Text>Duration: 06:00</Text>

        <Text>Crafting:</Text>
        <Text>1 Chrysanthemum Flower</Text>
        <Text>1 Water</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default RedTeaItem;