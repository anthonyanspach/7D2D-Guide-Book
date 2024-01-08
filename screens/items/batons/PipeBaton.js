{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeBatonItem({ navigation }) {
    return (
      <View>
        <Text>Pipe Baton Info</Text>

        <Text>Description:</Text>
        <Text>The Pipe Baton is a Melee weapon that players can craft with limited basic resources early in game or as needed when the player dies randomly and limited resources are available after they respawn in a different area away from their supplies. It can be found relatively frequently in early gamestages, making a decent early-game weapon if found at a moderate quality. The Pipe Baton can also be used as a Butchering tool to harvest small amounts of Raw Meat and Animal Fat. It may be repaired using Short Iron Pipes.</Text>
        <Text>This Pipe Baton was introduced in Alpha 20 along with long range weapons that also use Short Iron Pipe to craft.</Text>

        <Text>Crafting:</Text>
        <Text>12 Iron Pipe</Text>
        <Text>9 Leather</Text>

        <Text>Unlock Options:</Text>
        <Text>Tech Planet</Text>
      </View>
    );
  }

export default PipeBatonItem;