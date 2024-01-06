{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenHatchItem({ navigation }) {
    return (
      <View>
        <Text>Wooden Hatch Info</Text>

        <Text>Description:</Text>
        <Text>A Wood Hatch is a craft-able hatch that has the ability to be locked by the player. It is crafted using Wood. A Wood Hatch can be upgraded to an Iron Hatch (which can be further upgraded to a Vault Hatch).</Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default WoodenHatchItem;