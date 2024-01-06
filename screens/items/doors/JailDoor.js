{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function JailDoorItem({ navigation }) {
    return (
      <View>
        <Text>Jail Door Info</Text>

        <Text>Description:</Text>
        <Text>Unknown</Text>

        <Text>Crafting:</Text>
        <Text>Unknown</Text>

        <Text>Unlock Options:</Text>
        <Text>Unknown</Text>
      </View>
    );
  }

export default JailDoorItem;