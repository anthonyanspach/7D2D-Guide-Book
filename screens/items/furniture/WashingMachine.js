{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WashingMachineItem({ navigation }) {
    return (
      <View>
        <Text>Washing Machine Info</Text>

        <Text>Description:</Text>
        <Text>A Washing Machine is a lootable container found throughout the world in certain POIs.</Text>

        <Text>Dismantling:</Text>
        <Text>Possible Harvested Materials</Text>
        <Text>Iron</Text>
        <Text>Electrical Parts</Text>
        <Text>Mechanical Parts</Text>
        <Text>Short Iron Pipe</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default WashingMachineItem;