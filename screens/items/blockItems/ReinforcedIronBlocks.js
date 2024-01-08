{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ReinforcedIronBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Reinforced Iron Block Info</Text>

        <Text>Description:</Text>
        <Text>Reinforced Iron Blocks is the upgraded version of Iron Blocks. It can not be crafted using other materials, the only ways to obtain a Reinforced Iron Blocks are through upgrading Iron Blocks or using the Creative Menu. It is not possible to dismantle, scrap or use a Reinforced Iron Blocks as fuel. You can not destroy a Reinforced Iron Blocks, as such because it will simply downgrade at what would be its point of destruction.</Text>

        <Text>Crafting:</Text>
        <Text>1 Iron Block</Text>
        <Text>40 Iron</Text>
      </View>
    );
  }

export default ReinforcedIronBlocksItem;