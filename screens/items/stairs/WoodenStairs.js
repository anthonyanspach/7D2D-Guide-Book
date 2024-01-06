{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodenStairsItem({ navigation }) {
    return (
      <View>
        <Text>Wooden Stairs</Text>

        <Text>Description:</Text>
        <Text>Wooden Stairs are a craftable building material that are easy to craft and cheap on resources, requiring no rare or expensive materials. Due to its low strength they are fairly weak and will easily be destroyed by Zombies. While it is not possible to melt or scrap Wooden Stairs it is possible to use them as a source of Combustible Fuel.</Text>

        <Text>Crafting:</Text>
        <Text>10 Wood</Text>
      </View>
    );
  }

export default WoodenStairsItem;