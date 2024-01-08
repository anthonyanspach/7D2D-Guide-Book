{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MetalTrussingItem({ navigation }) {
    return (
      <View>
        <Text>Metal Trussing Info</Text>

        <Text>Description:</Text>
        <Text>Metal Trussing is a craftable building material that has a very high Structural Integrity. It can be shot through(as of A15 test branch, possibly earlier).</Text>

        <Text>Crafting:</Text>
        <Text>40 Iron</Text>
        <Text>5 Clay Soil</Text>
      </View>
    );
  }

export default MetalTrussingItem;