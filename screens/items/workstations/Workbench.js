{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkbenchItem({ navigation }) {
    return (
      <View>
        <Text>Workbench Info</Text>

        <Text>Description:</Text>
        <Text>The Workbench is an additional crafting queue for the player. Using ingredients held in the players Inventory, the workbench can craft items that the player can normally craft from their backpack as well as items that are only available on the Workbench. This enables a player to craft multiple items in parallel, when crafting with the workbench as well as from their backpack, as previously done.</Text>

        <Text>Crafting:</Text>
        <Text>25 Forged Iron</Text>
        <Text>20 Machanical Parts</Text>
        <Text>5 Duct Tape</Text>
        <Text>100 Nails</Text>
        <Text>100 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Forge Ahead</Text>
      </View>
    );
  }

export default WorkbenchItem;