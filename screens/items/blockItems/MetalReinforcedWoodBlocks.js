{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MetalReinforcedWoodBlockItem({ navigation }) {
    return (
      <View>
        <Text>Metal Reinforced Wood Block Info</Text>

        <Text>Description:</Text>
        <Text>Metal Reinforced Wood Blocks is the upgraded version of Reinforced Wood Blocks. Metal Reinforced Wood Blocks can be upgraded further into Iron Blocks. It can not be crafted using other materials, the only ways to obtain Metal Reinforced Wood Blocks are through upgrading Reinforced Wood Blocks or using the Creative Menu. It is not possible to use Metal Reinforced Wood Blocks as a source of Combustible fuel.</Text>

        <Text>Crafting:</Text>
        <Text>1 Reinforced Wood Block</Text>
        <Text>12 Iron</Text>
      </View>
    );
  }

export default MetalReinforcedWoodBlockItem;