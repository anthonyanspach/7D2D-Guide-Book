{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodCatwalkItem({ navigation }) {
    return (
      <View>
        <Text>Wood Catwalk Info</Text>

        <Text>Description:</Text>
        <Text>Wood Catwalk is a craftable building material that has a low Structural Integrity. It can be shot through, the hitbox cleanly matches the visual model. It is useful for creating walkways and short bridges around your base.</Text>

        <Text>Crafting:</Text>
        <Text>20 Wood</Text>
      </View>
    );
  }

export default WoodCatwalkItem;