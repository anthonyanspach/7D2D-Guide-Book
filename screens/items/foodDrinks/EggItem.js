{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function EggItem({ navigation }) {
    return (
      <View>
        <Text>Egg Info</Text>

        <Text>Description:</Text>
        <Text>An Egg is a food item found inside a Bird Nest or cooler. It can be eaten raw and will have a positive effect on Fullness. It can also be cooked and used as an ingredient.</Text>
      </View>
    );
  }

export default EggItem;