{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MolotocCocktailItem({ navigation }) {
    return (
      <View>
        <Text>Molotov Cocktail Info</Text>

        <Text>Description:</Text>
        <Text>A Molotov Cocktail is a throwable weapon good for damaging groups of Zombies or other players.</Text>

        <Text>Crafting:</Text>
        <Text>5 Cloth Fragments</Text>
        <Text>300 Gas Cans</Text>
        <Text>1 Oil</Text>
      </View>
    );
  }

export default MolotocCocktailItem;