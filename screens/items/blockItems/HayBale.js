{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HayBaleItem({ navigation }) {
    return (
      <View>
        <Text>Hay Bale Info</Text>

        <Text>Description:</Text>
        <Text>The Hay Bale is a craftable building material which also can be found in Barns. They are very weak and have no structural integrity as such they should not be used in building at all and only as a way to break a player's potentially dangerous fall. Prior to the A17 series of builds (starting at A13.6), complete fall protection was provided by Hay Bales. In A17 and beyond, a height limit for full effectiveness was introduced, with decreasing effectiveness at heights beyond that point; some tests suggest that a 22 block fall is the last safe distance.</Text>

        <Text>Crafting:</Text>
        <Text>10 Plant Fibers</Text>
      </View>
    );
  }

export default HayBaleItem;