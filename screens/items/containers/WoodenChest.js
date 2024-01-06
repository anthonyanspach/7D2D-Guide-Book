{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenChestItem({ navigation }) {
    return (
      <View>
        <Text>Wooden Chest Info</Text>

        <Text>Description:</Text>
        <Text>A Wooden Chest is a lootable container found throughout the world in various POIs.</Text>

        <Text>Not to be confused with Secure Storage Chest, a player-created block.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default WoodenChestItem;