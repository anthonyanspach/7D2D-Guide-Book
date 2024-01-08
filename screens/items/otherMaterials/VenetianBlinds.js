{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function VenetianBlindsItem({ navigation }) {
    return (
      <View>
        <Text>Venetian Blinds Info</Text>

        <Text>Description:</Text>
        <Text>Venetian Blinds hang in the windows of several different types of buildings. There are usually two panels per window. Hit Venetian Blinds with any tool, or your fist, to break it into 2 or 3 Scrap Plastics.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default VenetianBlindsItem;