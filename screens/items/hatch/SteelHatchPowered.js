{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelHatchPoweredItem({ navigation }) {
    return (
      <View>
        <Text>Steel Hatch Powered Info</Text>

        <Text>Description:</Text>
        <Text>A Steel Hatch (Powered) is a craftable hatch which only closes when powered by Electricity. This Hatch has to be crafted separately and cannot be upgraded from a Steel Hatch. It is crafted using Forged Steel, Springs, Mechanical Parts, and Electrical Parts. The Steel Hatch (Powered) cannot be upgraded further.</Text>

        <Text>Usage:</Text>
        <Text>The Steel Hatch (Powered) has no 'E' key options seen on other Hatches, thus must be powered with Electricity to be opened and closed. The easiest setup is to run a wire from your power source, through a Switch, to the Hatch. The default 'off' position leaves the Hatch closed, while flipping the Switch 'on' will open the Hatch.</Text>

        <Text>Crafting:</Text>
        <Text>10 Forged Style</Text>
        <Text>10 Springs</Text>
        <Text>10 Mechanical Parts</Text>
        <Text>10 Electrical Parts</Text>

        <Text>Unlock Options:</Text>
        <Text>Wiring 101</Text>
      </View>
    );
  }

export default SteelHatchPoweredItem;