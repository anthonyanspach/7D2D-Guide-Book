{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SteelKnucklesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Knuckles Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Steel Knuckles is a tier 3 brawling weapon used to pummel your enemies.</Text>

        <Text style={[styles.textHeader]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, Steel Knuckles is a short-range melee weapon. Left-clicking performs a basic melee attack, while right-clicking initiates a power attack, dealing more damage to enemies.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Steel Knuckles Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Furious Fists</Text>
      </ScrollView>
    );
  }

export default SteelKnucklesItem;