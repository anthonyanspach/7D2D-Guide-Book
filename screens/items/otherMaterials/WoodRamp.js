{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodRampItem({ navigation }) {
    return (
      <View>
        <Text>Wood Ramp Info</Text>

        <Text>Description:</Text>
        <Text>As of Alpha 10.4 build 10, Wood Ramp was no longer available via the Creative Menu. A Wood Ramp is the upgraded version of a Wood Ramp Frame and can also be upgraded further into a Reinforced Wood Ramp. It can not be crafted using other materials, the only ways to obtain a Wood Ramp was through upgrading a Wood Ramp Frame or using the Creative Menu. It was not possible to use a Wood Ramp as a source of Combustible fuel.</Text>

        <Text>Crafting:</Text>
        <Text>1 Wood Ramp Frame</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default WoodRampItem;