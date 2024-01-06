{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GarageDoorMetalItem({ navigation }) {
    return (
      <View>
        <Text>Garage Door Metal Info</Text>

        <Text>Description:</Text>
        <Text>A Garage Door Metal is a craft-able Door that has the ability to be locked by the player. It is 3 blocks wide, making it ideal for a front gate, or a Minibike garage. The front of Traders outposts are locked with these doors. It is one of the stronger doors in the game, because it is made of metal. You can use an Upgrading tool and 10x Forged Iron to upgrade a Garage Door Metal further along the upgrade path.</Text>

        <Text>Crafting:</Text>
        <Text>240 Scrap Iron</Text>
        <Text>6 Springs</Text>
        <Text>12 Mechanical Parts</Text>
      </View>
    );
  }

export default GarageDoorMetalItem;