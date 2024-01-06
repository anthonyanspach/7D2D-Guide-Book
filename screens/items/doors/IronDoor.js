{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronDoorItem({ navigation }) {
    return (
      <View>
        <Text>Iron Door Info</Text>

        <Text>Description:</Text>
        <Text>A Iron Door is a craft-able Door that has the ability to be locked by the player. it is one of the stronger doors in the game, because it is made of metal. You can also upgrade a Secure Wood Door to an Iron Door through the new upgrade process in A13. You can use an Upgrading tool and 10x Forged Iron to upgrade a Iron Door further along the upgrade path.</Text>

        <Text>Crafting:</Text>
        <Text>10 Forged Iron</Text>
      </View>
    );
  }

export default IronDoorItem;