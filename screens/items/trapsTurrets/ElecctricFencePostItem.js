{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ElectricFencePostItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Electrical Fence Post Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Electric Fence Post shocks players as well as the player that placed the traps regardless them being within Land Claim Block territory and Zombies who touch the wire between two connected posts. The wires can go through any block. The maximum distance between 2 posts is 14 blocks, not counting the blocks the posts stand on.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>7 Forged Iron</Text>
        <Text style={[styles.list]}>3 Electrical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Electrical Traps</Text>
      </ScrollView>
    );
  }

export default ElectricFencePostItem;