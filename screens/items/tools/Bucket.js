{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function BucketItem() {
    return (
      <View>
        <Text>Bucket info</Text>

        <Text>Description:</Text>
        <Text>A Bucket is a craftable item. A player can fill a Bucket by equipping it and clicking the secondary action button (Right mouse button by default), while facing the water. This will give the player a Bucket of Water.</Text>

        <Text>Crafting:</Text>
        <Text>7 Forged Iron</Text>
      </View>
    );
  }

export default BucketItem;