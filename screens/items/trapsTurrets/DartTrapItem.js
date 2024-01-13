{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DartTrapItem({ navigation }) {
    return (
      <View>
        <Text>Dart Trap Info</Text>

        <Text>Description:</Text>
        <Text>When powered with Electricity, the Dart Trap launches Iron Darts in a straight line up to a maximum distance of 26 blocks with a cadence of one projectile per second.</Text>

        <Text>Iron darts deal good damage for a small cost, making dart traps very efficient at damaging zombies.</Text>

        <Text>Uses:</Text>
        <Text>Dart traps are amazing at passively dealing with the Heatmap mechanics of the game. For instance, setting up dart traps and a pressure plate in front a door that leads to a dew collector farm (which are notable in A21 for generating large amounts of heat) will prevent screaming zombies from damaging the door and eventually breaking in.</Text>

        <Text>They are also one of the best tool for base defense on horde night available to the player, assuming zombies are funneled through a long corridor. This tactic is made even more effective with the added use of the Electric Fence Post trap.</Text>

        <Text>Crafting:</Text>
        <Text>31 Forged Iron</Text>
        <Text>9 Mechanical Parts</Text>
        <Text>6 Electrical Parts</Text>
        <Text>7 Oil</Text>

        <Text>Unlock Options:</Text>
        <Text>Electrical Traps</Text>
      </View>
    );
  }

export default DartTrapItem;