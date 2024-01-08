{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeRifleItem({ navigation }) {
    return (
      <View>
        <Text>Pipe Rifle Info</Text>

        <Text>Description:</Text>
        <Text>Pipe Rifles were added to the game in Alpha 20. They are intended to be an early-game weapon, much like their precursor the Blunderbuss. The two core components used in crafting are pipes and glue.</Text>

        <Text>Like all pipe weapons, it can be crafted right at the beginning of the game (assuming the player has all its crafting ingredients) requiring no workstations, books or skills. Headshotting adds 25 extra damage in A21.</Text>

        <Text>Crafting:</Text>
        <Text>12 Short Iron Pipe</Text>
        <Text>6 Glue</Text>
        <Text>18 Wood</Text>

        <Text>Unlock Options:</Text>
        <Text>Rifle World</Text>
      </View>
    );
  }

export default PipeRifleItem;