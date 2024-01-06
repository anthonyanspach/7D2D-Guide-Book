{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BrickStairsItem({ navigation }) {
    return (
      <View>
        <Text>Brick Stairs Info</Text>

        <Text>Description:</Text>
        <Text>Brick Stairs are a craftable building material that are easy to craft although the recipe requires Brick Pavers which makes them more expensive on resources. Due to their reasonable strength they will take a while to be destroyed by Zombies. Brick Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel.</Text>

        <Text>Crafting:</Text>
        <Text>10 Small Stones</Text>
        <Text>60 Clay Soil</Text>
      </View>
    );
  }

export default BrickStairsItem;