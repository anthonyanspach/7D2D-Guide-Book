{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodFenceItem({ navigation }) {
    return (
      <View>
        <Text>Wood Fencing Info</Text>

        <Text>Description:</Text>
        <Text>A Wood Fence is a craftable Building Material. It is easy to craft and inexpensive on resources. Due to its weak strength it is easy to destroy and will not offer very much protection against attacks from Zombies.</Text>

        <Text>Crafting:</Text>
        <Text>9 Wood</Text>
      </View>
    );
  }

export default WoodFenceItem;