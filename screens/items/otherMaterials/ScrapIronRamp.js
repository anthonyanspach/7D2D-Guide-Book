{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ScrapIronRampItem({ navigation }) {
    return (
      <View>
        <Text>Scrap Iron Ramp Info</Text>

        <Text>Description:</Text>
        <Text>Scrap Iron Ramp is a building material created by upgrading a Scrap Iron Frame Ramp block using Scrap Iron. It can be further upgraded into Reinforced Scrap Iron Ramp using Scrap Iron and an appropriate tool.</Text>

        <Text>Crafting:</Text>
        <Text>1 Scrap Iron Frame Ramp</Text>
        <Text> 5 Scrap Iron</Text>
      </View>
    );
  }

export default ScrapIronRampItem;