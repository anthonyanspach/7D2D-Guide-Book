{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MetalReinforcedWoodenDoorItem({ navigation }) {
    return (
      <View>
        <Text>Metal Reinforced Wooden Door Info</Text>

        <Text>Description:</Text>
        <Text>A Metal Reinforced Wooden Door is the upgraded version of a Reinforced Secure Wooden Door.</Text>

        <Text>Crafting:</Text>
        <Text>To craft an Metal Reinforced Wooden Door, upgrade a previously placed Reinforced Secure Wooden Door.</Text>
        <Text>1 Reinforced Secure Wooden Door</Text>
        <Text>12 Iron</Text>
      </View>
    );
  }

export default MetalReinforcedWoodenDoorItem;