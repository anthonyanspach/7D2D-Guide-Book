{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenHatchv3Item({ navigation }) {
    return (
      <View>
        <Text>Wooden Hatch V3</Text>

        <Text>Description:</Text>
        <Text>A Wooden Hatch v3 is a hatch that has the ability to be locked by the player. It is upgraded from a Wooden Hatch using Wood. A Wooden Hatch v3 can be upgraded to a Scrap Iron Hatch (which can be further upgraded to a Vault Hatch).</Text>

        <Text>Crafting:</Text>
        <Text>Unknown</Text>
      </View>
    );
  }

export default WoodenHatchv3Item;