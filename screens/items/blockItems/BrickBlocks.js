{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BrickBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Brick Blocks Info</Text>

        <Text>Description:</Text>
        <Text>Brick Blocks is a building material. It has 1,200 hit points. It is best destroyed with an Auger or Pickaxe. Hitting the block will yield 6 Small Stone in total. As of now, Brick Blocks can no longer be crafted.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default BrickBlocksItem;