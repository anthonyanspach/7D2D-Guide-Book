{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Steel Block Info</Text>

        <Text>Description:</Text>
        <Text>Steel Blocks are the strongest building material in the game. These blocks are rather expensive with each one requiring 10 Forged Steel. Use these blocks to reinforce critical parts of your base, and to discourage Zombie attacks on those areas. All Steel Blocks varieties have the same stats.</Text>

        <Text>To place the many varieties of blocks available you must craft Steel Shapes. The default shape is a solid steel cube. To change the shape that is being placed put the Steel Shapes in your hotbar, select them so you are holding them in your hand, hold R, and then select the shapes menu. This will bring up the Shapes interface for selecting which block will be placed. There are a huge number of different shaped blocks available. Some examples include: the standard cube, ramps and stairs, posts, and partial blocks.</Text>

        <Text>Crafting:</Text>
        <Text>10 Forged Steel</Text>
      </View>
    );
  }

export default SteelBlocksItem;