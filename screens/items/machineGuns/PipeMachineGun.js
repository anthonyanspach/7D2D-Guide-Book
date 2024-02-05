{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PipeMachineGunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pipe Machine Gun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Pipe Machine Gun is a short to medium ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the Pipe Machine Gun uses 7.62mm Rounds as Ammunition.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>12 Short Iron Pipe</Text>
        <Text style={[styles.list]}>6 Glue</Text>
        <Text style={[styles.list]}>18 Wood</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tactical Warfare</Text>
      </ScrollView>
    );
  }

export default PipeMachineGunItem;