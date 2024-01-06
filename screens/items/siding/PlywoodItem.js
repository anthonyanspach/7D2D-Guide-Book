{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PlywoodItem({ navigation }) {
    return (
      <View>
        <Text>Plywood Info</Text>

        <Text>Description:</Text>
        <Text>Plywood is a non-craftable item, which is commonly found as barricaded windows in existing building in 7 Days to Die. It can be upgraded with Wood to a plywood with one board, and further upgraded to plywood with two boards and three boards.</Text>

        <Text>Crafting:</Text>
        <Text>Unknown</Text>
      </View>
    );
  }

export default PlywoodItem;