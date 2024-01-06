{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronDoorv3Item({ navigation }) {
    return (
      <View>
        <Text>Iron Door V3</Text>

        <Text>Description:</Text>
        <Text>A Iron Door1 v3 is an upgrade of a craftable Door that has the ability to be locked by the player.</Text>

        <Text>Crafting:</Text>
        <Text>10 Forged Iron</Text>
      </View>
    );
  }

export default IronDoorv3Item;