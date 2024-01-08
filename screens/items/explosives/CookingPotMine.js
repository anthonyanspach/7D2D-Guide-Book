{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CookingPotMineItem({ navigation }) {
    return (
      <View>
        <Text>Cooking Pot Mine Info</Text>

        <Text>Description:</Text>
        <Text>A Cooking Pot Mine is a ground based Explosive, similar to other Mines such as the Hub Cap Land Mine or Tin Land Mine. It can be strategically placed on any flat surface except water. If anything steps on it, whether it be a Zombie, a player, or an animal, the mine will explode. This is the only mine that is able to be picked up once placed.</Text>

        <Text>Crafting:</Text>
        <Text>1 Forged Iron</Text>
        <Text>5 Gun Powder</Text>
        <Text>1 Nail</Text>
        <Text>1 Duct Tape</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default CookingPotMineItem;