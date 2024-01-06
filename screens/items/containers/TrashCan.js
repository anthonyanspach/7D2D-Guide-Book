{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TrashCanItem({ navigation }) {
    return (
      <View>
        <Text>Trash Can</Text>

        <Text>Description:</Text>
        <Text>Trash Cans is a lootable container found throughout the world in certain POIs.</Text>

        <Text>You are able to destroy it with an Axe for example. If you do that you get one Scrap Iron. Make sure that you saved the loot before destruction. Otherwise the loot is gone.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default TrashCanItem;