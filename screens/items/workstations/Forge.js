{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ForgeItem({ navigation }) {
    return (
      <View>
        <Text>Forge Item</Text>

        <Text>Description:</Text>
        <Text>A Forge is used to smelt items into refined products that are more useful. This process requires time, fuel sources to operate, and scrapped or whole materials to smelt. A Forge allows survivors to craft advanced Tools, Building Materials, ammunition components, and other Resources.</Text>

        <Text>Usage:</Text>
        <Text>Fuel is placed in the cells below the tool cells. The Forge can be turned on either with the on/off button below the fuel or turned on by starting a new recipe. The Forge will not turn off automatically unless all the fuel is expended. No recipe will be available until there is fuel in the fuel cells. Fuels include all items with a burn time, including Coal (100 seconds), Wood (50 seconds), and Oil Shale (5 seconds), and Gas Can (2 seconds).</Text>

        <Text>Crafting:</Text>
        <Text>50 Cobblestone Rocks</Text>
        <Text>1 Wood Log</Text>
        <Text>10 Leather</Text>
        <Text>3 Duct Tape</Text>
        <Text>3 Short Iron Pipes</Text>

        <Text>Unlock Options:</Text>
        <Text>Forged Ahead</Text>
      </View>
    );
  }

export default ForgeItem;