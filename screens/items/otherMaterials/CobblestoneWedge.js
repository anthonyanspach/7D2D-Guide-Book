{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CobblestoneWedgeItem({ navigation }) {
    return (
      <View>
        <Text>Cobblestone Wedge Info</Text>

        <Text>Description:</Text>
        <Text>Cobblestone Wedge is a the upgraded version of a Rebar Ramp Frame and can also be upgraded further into a Reinforced Cobblestone Ramp. It can not be crafted using other materials, the only ways to obtain a Cobblestone Wedge are through upgrading a Rebar Ramp Frame or using the Creative Menu. It is not possible to dismantle, scrap or use a Cobblestone Wedge as fuel. You can not destroy a Cobblestone Wedge, as such because it will simply downgrade at what would be its point of destruction.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default CobblestoneWedgeItem;