{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StainlessSteelBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Stainless Steel Block Info</Text>

        <Text>Description:</Text>
        <Text>Stainless Steel Blocks are a craftable building material. They are the most durable building blocks in the game. They are created by upgrading Steel Blocks with ten (10) Steel Polish using any construction tool. However, the Steel Polish was removed from the game, so Stainless Steel Blocks are no longer craftable by players. When Stainless Steel Blocks degrade, they degrade into Reinforced Concrete Blocks, rather than Steel Blocks.</Text>

        <Text>Crafting:</Text>
        <Text>1 Steel Block</Text>
        <Text>10 reinforced Steel Upgrade</Text>
      </View>
    );
  }

export default StainlessSteelBlocksItem;