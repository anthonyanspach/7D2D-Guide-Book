{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodBlocksItem({ navigation }) {
    return (
      <View>
        <Text>Wood Block Info</Text>

        <Text>Description:</Text>
        <Text>Wood Blocks are a craftable building material that is somewhat durable. They are upgraded from Wood Frames and can be upgraded into Cobblestone Blocks. Wood is an early game material that is found in abundance. These blocks are also very quick to craft. This makes it an excellent choice for an early game shelter. It will not be able to survive sustained damage as well as Cobblestone Blocks. It is recommended to upgrade structures that are vulnerable to Zombie attack when possible. This is especially true for any structure you plan on facing a Blood Moon Horde in.</Text>

        <Text>To place the many varieties of Wood Blocks available you must craft Wood Shapes. The default shape is a solid cube. To change the shape that is being placed put the Wood Shapes in your hotbar, select them so you are holding them in your hand, hold R, and then select the shapes menu. This will bring up the Shapes interface for selecting which block will be placed. There are a huge number of different shaped blocks available. Some examples include: the standard cube, ramps, stairs, posts, and partial blocks.</Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default WoodBlocksItem;