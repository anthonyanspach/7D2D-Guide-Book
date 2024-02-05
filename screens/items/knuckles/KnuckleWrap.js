{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function KnuckleWrapsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Knuckle Wraps Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Knuckle Wraps is a tier 1 brawling weapon used to pummel your enemies.</Text>

        <Text style={[styles.textHeader]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, Knuckle Wraps function as a short range melee weapon. Using the primary click (default left mouse button) will punch with the Knuckle Wraps, initiating a basic melee attack. Using the secondary click (default right mouse button) will initiate a power attack, doing more damage to your enemies.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>6 Iron</Text>
        <Text style={[styles.list]}>2 Leather</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Furious Fists</Text>
      </ScrollView>
    );
  }

export default KnuckleWrapsItem;