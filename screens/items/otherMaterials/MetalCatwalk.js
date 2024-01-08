{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MetalCatwalkItem({ navigation }) {
    return (
      <View>
        <Text>Metal Catwalk Info</Text>

        <Text>Description:</Text>
        <Text>Metal Catwalk was a craftable building material that has a high Structural Integrity, removed in A20. It was created by upgrading Wood Catwalk. It could be shot through, as the hitbox cleanly matched the visual model. It was useful for creating walkways and short bridges around one's base.</Text>

        <Text>Crafting:</Text>
        <Text>1 Wood Catwalk</Text>
        <Text>8 Forged Iron</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default MetalCatwalkItem;