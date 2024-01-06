{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SecureStorageChestItem({ navigation }) {
    return (
      <View>
        <Text>Secure Storage Chest Info</Text>

        <Text>Description:</Text>
        <Text>A Secure Storage Chest is a craftable item. These are useful to place near Sleeping Bags to store valuable loot. There are other types of chests scattered around the map which look the same but cannot be crafted. These are called Wooden Chests.</Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default SecureStorageChestItem;