{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PumpkinItem({ navigation }) {
    return (
      <View>
        <Text>Pumpkin Info</Text>

        <Text>Description:</Text>
        <Text>A Pumpkin is a food item that can be harvested from a Pumpkin Plant. It can be used to make Pumpkin Seeds and numerous foods.</Text>
      </View>
    );
  }

export default PumpkinItem;