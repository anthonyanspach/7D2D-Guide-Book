{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShepardsPieItem({ navigation }) {
    return (
      <View>
        <Text>Shepards Pie Info</Text>

        <Text>Description:</Text>
        <Text>Shepards Pie is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Shepards Pie will have a positive effect on Fullness, Stamina, and Health. It is an incredibly effective late-game level of food as it gives a great boost towards most stats. However, its ingredients are mainly composed of a mixture of looting and farming.</Text>

        <Text>Fullness: +104</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: +40</Text>
        <Text>Health: +52</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Crafting:</Text>
        <Text>1 Lamb Ration</Text>
        <Text>1 Can of Peas</Text>
        <Text>1 Ear of Corn</Text>
        <Text>3 Animal Fat</Text>
        <Text>1 Potato</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default ShepardsPieItem;