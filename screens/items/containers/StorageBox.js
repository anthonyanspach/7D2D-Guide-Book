{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function StorageBoxItem({ navigation }) {
    return (
      <View>
        <Text>Storage Box Info</Text>

        <Text>Description:</Text>
        <Text>A very large, lockable crate which must be crafted. Press & hold [activate] to lock it or set a combination.</Text>

        <Text>Crafting:</Text>
        <Text>10 Nails</Text>
        <Text>12 Wood</Text>
      </View>
    );
  }

export default StorageBoxItem;