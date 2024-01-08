{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BulletproofGlassItem({ navigation }) {
    return (
      <View>
        <Text>Bulletproof Glass Info</Text>

        <Text>Description:</Text>
        <Text>A Bulletproof Glass is a very strong semi-transparent block introduced in Alpha 16 which can be found in various buildings.</Text>

        <Text>Crafting:</Text>
        <Text>110 Crushed Sand</Text>
        <Text>10 Small Stone</Text>
        <Text>40 Lead</Text>
        <Text>20 Iron</Text>
        <Text>20 Clay Soil</Text>
      </View>
    );
  }

export default BulletproofGlassItem;