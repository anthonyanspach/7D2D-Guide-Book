{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BrassFaucetv2Item({ navigation }) {
    return (
      <View>
        <Text>Brass Faucet V2</Text>

        <Text>Description:</Text>
        <Text>Brass Faucet 2s can be found on most Sinks. They can be collected after breaking them. They do not provide any structural support. Warning! Do not buy from Trader as a way to obtain Brass, as you will get more Brass from smelting the Duke's Casino Tokens directly than you will get from buying this item!</Text>

        <Text>Crafting:</Text>
        <Text>None</Text>

        <Text>Unlock Options:</Text>
        <Text>None / Only Found</Text>
      </View>
    );
  }

export default BrassFaucetv2Item;