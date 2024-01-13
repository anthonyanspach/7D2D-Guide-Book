{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrandpaAwesomeSauceItem({ navigation }) {
    return (
      <View>
        <Text>Grandpa's Awesome Sauce Info</Text>

        <Text>Description:</Text>
        <Text>Gives the player +20% to Bartering for 3 minutes allowing players to get much better deals at Traders.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>Bartering: +20%</Text>
        <Text>Duration: 03:00</Text>

        <Text>Crafting:</Text>
        <Text>50 Duke's Casino Tokens</Text>
        <Text>5 Jar of Honey</Text>
        <Text>5 Mushrooms</Text>
        <Text>10 Gas Can</Text>
        <Text>1 Ear of Super Corn</Text>

        <Text>Needed:</Text>
        <Text>Cooking Pot</Text>

        <Text>Unlock Options:</Text>
        <Text>Home Cooking Weekly</Text>
      </View>
    );
  }

export default GrandpaAwesomeSauceItem;