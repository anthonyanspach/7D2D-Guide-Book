{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function M60MachineGunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>M60 Machine Gun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>M60 Machine Gun is a short- to medium-ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the M60 uses 7.62mm Rounds as Ammunition.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Machine Gun Parts</Text>
        <Text style={[styles.list]}>100 Forged Steel</Text>
        <Text style={[styles.list]}>115 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>20 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tactical Warfare</Text>
      </ScrollView>
    );
  }

export default M60MachineGunItem;