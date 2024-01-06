{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BrassFaucetItem({ navigation }) {
    return (
      <View>
        <Text>Brass Faucet Info</Text>

        <Text>Description:</Text>
        <Text>Brass Faucets can be found on Sinks. They can be collected after breaking them. They are not able to be used structurally.</Text>

        <Text>Dismantling:</Text>
        <Text>Brass Faucet can be scrapped to produce 12 units of Brass.</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default BrassFaucetItem;