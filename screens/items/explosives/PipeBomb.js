{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeBombItem({ navigation }) {
    return (
      <View>
        <Text>Pipe Bomb Info</Text>

        <Text>Description:</Text>
        <Text>A Pipe Bomb is a throwable Explosive weapon good for damaging groups of Zombies or players.</Text>

        <Text>Crafting:</Text>
        <Text>1 Plant Fiber</Text>
        <Text>12 Gun Powder</Text>
        <Text>1 Short Pipe</Text>

        <Text>Unlock Options:</Text>
        <Text>Explosive Magazine</Text>
      </View>
    );
  }

export default PipeBombItem;