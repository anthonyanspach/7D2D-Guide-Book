{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MetalReinforcedWoodRampItem({ navigation }) {
    return (
      <View>
        <Text>Metal Reinforced Wood Ramp Info</Text>

        <Text>Description:</Text>
        <Text>A Metal Reinforced Wood Ramp is a the upgraded version of a Reinforced Wood Ramp. It can not be crafted using other materials, the only ways to obtain a Metal Reinforced Wood Ramp are through upgrading a Reinforced Wood Ramp or using the Creative Menu. It is not possible to use a Metal Reinforced Wood Ramp as a source of Combustible fuel.</Text>

        <Text>Crafting:</Text>
        <Text>1 Reinforced Wood Ramp</Text>
        <Text>10 Iron</Text>
      </View>
    );
  }

export default MetalReinforcedWoodRampItem;