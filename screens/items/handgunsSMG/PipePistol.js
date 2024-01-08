{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipePistolItem({ navigation }) {
    return (
      <View>
        <Text>Pipe Pistol Info</Text>

        <Text>Description:</Text>
        <Text>Pipe Pistols were added to the game in Alpha 20 Experimental. They are intended to be an early-game weapon, much like their precursor the Blunderbuss.</Text>

        <Text>Crafting:</Text>
        <Text>12 Short Iron Pipe</Text>
        <Text>6 Glue</Text>
        <Text>18 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Handgun Magazine</Text>
      </View>
    );
  }

export default PipePistolItem;