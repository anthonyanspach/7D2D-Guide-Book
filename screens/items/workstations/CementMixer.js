{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CementMixerItem({ navigation }) {
    return (
      <View>
        <Text>Cement Mixer Info</Text>

        <Text>Description:</Text>
        <Text>A Cement Mixer is a multi-use tool that can mix not only materials for the production of Concrete Mix, but also Sand, Crushed Sand, Gravel, and Stones.</Text>

        <Text>Usage:</Text>
        <Text>Once placed, the Cement Mixer is ready for use. It needs no fuel source and has no input slots. However, it does have a queue, which allows one to craft multiple different items in a series.</Text>

        <Text>Crafting:</Text>
        <Text>25 Forged Iron</Text>
        <Text>4 Springs</Text>
        <Text>1 Engine</Text>
        <Text>10 Machanical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Forged Ahead</Text>
      </View>
    );
  }

export default CementMixerItem;