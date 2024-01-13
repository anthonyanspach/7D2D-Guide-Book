{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RepairingItemScreen({ navigation }) {
    return (
      <View>
        <Text>Repairing Mechanics</Text>

        <Text>Repairing Items:</Text>
        <Text>Most tools, weapons, and armor have a Durability which degrades over time with use.</Text>

        <Text>Tools, weapons, and armor all function normally until they reach zero durability, at which point tools and weapons become unusable until repair, and armor stops providing protection until repaired. Repairing will restore the tool, weapon, or armor back to Max Durability.</Text>


        <Text>Repairing Blocks:</Text>
        <Text>Any construction tool can be used to repair blocks.</Text>

        <Text>To repair a block, the player must have the appropriate resource to repair it. This is usually one of the resources used to create the block. This is not always the case, for example Brick Blocks need Cobblestone Rocks for repairs. Using the right mouse button will repair the block.</Text>

        <Text>It is very easy to see if a block requires a repair. Some blocks will have a visually altered appearance when they are damaged. Alternately, with a tool equipped and the crosshairs centered on the block, the health bar of the block will show. The health bar of the block will display as Current Durability / Max Durability for the block. The health bar of the block only shows when the block is damaged.</Text>
      </View>
    );
  }

export default RepairingItemScreen;