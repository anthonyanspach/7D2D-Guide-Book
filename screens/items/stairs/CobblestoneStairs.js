{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CobblestoneStairsItem({ navigation }) {
    return (
      <View>
        <Text>Cobblestone Stairs Info</Text>

        <Text>Description:</Text>
        <Text>Cobblestone Stairs are a craftable building material that are easy to craft. Due to their reasonable strength they will take a while to be destroyed by Zombies. Cobblestone Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel.</Text>

        <Text>Crafting:</Text>
        <Text>Cobblestone Stairs can be upgraded in place from Cobblestone Frame Stairs.</Text>
        <Text>1 Cobblestone Frame Stairs</Text>
        <Text>10 Cobblestone Rocks</Text>
      </View>
    );
  }

export default CobblestoneStairsItem;