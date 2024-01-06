{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GarageDoorMetalv3Item({ navigation }) {
    return (
      <View>
        <Text>Garage Door Metal V3</Text>

        <Text>Description:</Text>
        <Text>A Garage Door Metal v3 is an upgrade Door that has the ability to be locked by the player. It is 3 blocks wide, making it ideal for a front gate, or a Minibike garage. The front of Traders outposts are locked with these doors. It is one of the stronger doors in the game, because it is made of metal.</Text>

        <Text>Crafting:</Text>
        <Text>Unknown</Text>

        <Text>Unlock Options:</Text>
        <Text>Unknown</Text>
      </View>
    );
  }

export default GarageDoorMetalv3Item;