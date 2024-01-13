{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ConstructingBuildingsScreen({ navigation }) {
    return (
      <View>
        <Text>Constructing Buildings Mechanics</Text>

        <Text>Basics:</Text>
        <Text>When placing a block, the preview will change color to indicate the effect of adding the block:</Text>

        <Text>Yellow = The block is stable. As the block becomes more yellow it means it is getting less stable</Text>

        <Text>Red = Placing the block would cause some type of collapse. Adding blocks to reinforce other parts of the structure may allow this block to then be placed without collapse</Text>

        <Text>Pink = Placing would cause this block to fall as it does not have sufficient support</Text>


        <Text>Vertical:</Text>
        <Text>Vertical stability is infinite. You can stack 250 stone, tungsten, or concrete on a single Wood Frames. (then you hit the ceiling of the game)</Text>

        <Text>While the material of a pillar is irrelevant when stacking it up, it matters a great deal for what you can attach to the side of it.</Text>


        <Text>Overview:</Text>
        <Text>It is not possible to build a beam longer than 15 blocks. The 16th block simply drops and doesn't stick to the beam.</Text>

        <Text>A beam longer than eight blocks will partially collapse when stepped on the 9th block. This is also true for platforms; any block further away than 8 blocks from the base will fall if stepped on. Every block between you and the base counts; if you build 3 blocks straight, 2 to the side and than 3 straight again, counts as 8 blocks. Adding any further block and stepping on it will cause it to fall.</Text>
      </View>
    );
  }

export default ConstructingBuildingsScreen;