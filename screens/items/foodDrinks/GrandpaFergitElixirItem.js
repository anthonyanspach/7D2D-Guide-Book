{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GrandpaFergitElixirItem({ navigation }) {
    return (
      <View>
        <Text>Grandpa's Fergit'n Elixir Info</Text>

        <Text>Description:</Text>
        <Text>Resets player Skill Points and can only be acquired from Traders. When used, you will unlearn all of the different skill you have perked into, it returns all of the points to unused points. Books and schematics the player has read are not affected.</Text>

        <Text>Fullness: 0</Text>
        <Text>Hydration: 0</Text>
        <Text>Stamina: 0</Text>
        <Text>Health: 0</Text>
        <Text>Dysentery Chance: 0%</Text>

        <Text>Buff:</Text>
        <Text>All Skills Reset</Text>
      </View>
    );
  }

export default GrandpaFergitElixirItem;