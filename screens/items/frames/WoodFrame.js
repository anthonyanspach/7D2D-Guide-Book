{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodFrameItem({ navigation }) {
    return (
      <View>
        <Text>Wood Frame Info</Text>


        <Text>Description:</Text>
        <Text>Wood Frames or Frame Shapes are the easiest to craft building material, but also the least durable. It only takes a handful of zombie strikes to destroy these blocks. However they are both cheap and fast to craft.</Text>

        <Text>Unlike the rest of the building materials these can be picked up after being placed as a block. Due to the low cost and ability to move Wood Frames they are excellent for temporary structures. Examples include stairs, ramps, or platforms to help with scaling buildings. One strategy involves creating a vertical pillar of Wood Frames and can be used to rapidly reach the roof of even the tallest Points of Interest.</Text>

        <Text>A temporary frame structure can be turned into a more permanent one by upgrading Wood Frames to Wood Blocks. Wood Blocks cannot be picked up, but have much more durability.</Text>

        <Text>Shapes Menu:</Text>
        <Text>The various Wood Frames blocks are crafted as Frame Shapes. The default shape is a solid cube. There are a huge number of different shaped blocks available. Some examples include: the standard cube, ramps, stairs, posts, and partial blocks.</Text>

        <Text>To access the different shapes you must hold down 'R'(B on an xbox controller) while holding Wood Frames in your hand, then select the top option in the radial menu. This is the Shapes Menu. From here you are free to browse and search the various categories for the block you want. All blocks have the same stats.</Text>

        <Text>Crafting:</Text>
        <Text>2 Wood</Text>
      </View>
    );
  }

export default WoodFrameItem;