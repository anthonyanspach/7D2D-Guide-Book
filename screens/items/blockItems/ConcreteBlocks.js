{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ConcreteBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Concrete Blocks Info</Text>

        <Text>Description:</Text>
        <Text>Concrete Blocks are a craftable building material that is very durable. Zombies can still break it, but it will take a lot of time since it is one of the stronger building materials in the game. Hitting the block will yield 25 Cobblestone Rocks in total. All Concrete Blocks have the same stats.</Text>

        <Text>To place the many varieties of blocks available you must craft Concrete Shapes. The default shape is a solid concrete cube. To change the shape that is being placed put the Concrete Shapes in your hotbar, select them so you are holding them in your hand, hold R, and then select the shapes menu. This will bring up the Shapes interface for selecting which block will be placed. There are a huge number of different shaped blocks available. Some examples include: the standard cube, ramps and stairs, posts, and partial blocks.</Text>

        <Text>Crafting:</Text>
        <Text>10 Concrete Mix</Text>
      </View>
    );
  }

export default ConcreteBlocksItem;