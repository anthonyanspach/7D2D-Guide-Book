{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function ReinforcedDrawbridgePoweredItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Reinforced Drawbridge (Powered) Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Reinforced Drawbridge -Powered- is nearly identical to the Reinforced Drawbridge. The main exception being that the Powered variant requires a power source and something like a switch to operate it.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>31 Forged Iron</Text>
        <Text style={[styles.list]}>31 Wood</Text>
        <Text style={[styles.list]}>31 Springs</Text>
        <Text style={[styles.list]}>31 Mechanical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Wiring 101</Text>
      </ScrollView>
    );
  }

export default ReinforcedDrawbridgePoweredItem;