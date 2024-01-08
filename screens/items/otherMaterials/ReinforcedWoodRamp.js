{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ReinforcedWoodRampItem({ navigation }) {
    return (
      <View>
        <Text>Reinforced Wood Ramp Info</Text>

        <Text>Description:</Text>
        <Text>A Reinforced Wood Ramp is a the upgraded version of a Wood Ramp and can also be upgraded further into a Metal Reinforced Wood Ramp. It can not be crafted using other materials, the only ways to obtain a Reinforced Wood Ramp are through upgrading a Wood Ramp Frame or using the Creative Menu. It is not possible to use a Reinforced Wood Ramp as a source of Combustible fuel.</Text>

        <Text>Crafting:</Text>
        <Text>1 Wood Ramp</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default ReinforcedWoodRampItem;