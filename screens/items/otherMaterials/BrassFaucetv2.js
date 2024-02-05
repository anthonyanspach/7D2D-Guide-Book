{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function BrassFaucetv2Item({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Brass Faucet V2</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Brass Faucet 2s can be found on most Sinks. They can be collected after breaking them. They do not provide any structural support. Warning! Do not buy from Trader as a way to obtain Brass, as you will get more Brass from smelting the Duke's Casino Tokens directly than you will get from buying this item!</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default BrassFaucetv2Item;