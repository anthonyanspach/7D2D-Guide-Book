{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenShinglesBlockItem({ navigation }) {
    return (
      <View>
        <Text>Wooded Shingles Block Info</Text>

        <Text>Description:</Text>
        <Text>Wooden Shingles Blocks is a craft-able building material used to build roof designs.</Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default WoodenShinglesBlockItem;