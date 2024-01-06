{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ReinforcedSecureWoodenDoorItem({ navigation }) {
    return (
      <View>
        <Text>Reinforced Secure Wooden Door Info</Text>

        <Text>Description:</Text>
        <Text>A Reinforced Secure Wooden Door is a door that can be locked and unlocked by the player. It is the upgraded version of a Secure Wooden Door and can also be upgraded further into a Metal Reinforced Wooden Door.</Text>

        <Text>Crafting:</Text>
        <Text>To craft an Reinforced Secure Wooden Door, upgrade a previously placed Secure Wooden Door.</Text>
        <Text>1 Secure Wooden Door</Text>
        <Text>4 Wood</Text>
      </View>
    );
  }

export default ReinforcedSecureWoodenDoorItem;