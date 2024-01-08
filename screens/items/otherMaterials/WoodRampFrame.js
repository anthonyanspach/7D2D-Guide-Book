{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodRampFrameItem({ navigation }) {
    return (
      <View>
        <Text>Wood Ramp Frame Info</Text>

        <Text>Description:</Text>
        <Text>A Wood Ramp Frame is a craft-able Building Material, it is easy to craft, inexpensive on resources and can be upgraded into a Wood Ramp. It is also possible to use a Wood Ramp Frame as a source of Combustible fuel.</Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default WoodRampFrameItem;