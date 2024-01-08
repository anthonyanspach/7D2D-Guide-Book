{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SolidRebarRampFrameItem({ navigation }) {
    return (
      <View>
        <Text>Solid Rebar Ramp Frame</Text>

        <Text>Description:</Text>
        <Text>A Solid Rebar Ramp Frame is non craft-able it is an intermediate Upgrading step between Rebar Ramp Frame and Concrete Ramp. When you Upgrading a Rebar Ramp Frame this item is what you have. It looks just like a Rebar Ramp Frame, but it has wood coverings.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>Set in Concrete</Text>
      </View>
    );
  }

export default SolidRebarRampFrameItem;