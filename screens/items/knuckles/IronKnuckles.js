{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronKnucklesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Knuckles Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Knuckles is a tier 2 brawling weapon used to pummel your enemies. While better than Knuckle Wraps it is not as good as Steel Knuckles</Text>

        <Text style={[styles.textHeader]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, Iron Knuckles function as a short range melee weapon. Using the primary click (default left mouse button) will punch with the Iron Knuckles, initiating a basic melee attack. Using the secondary click (default right mouse button) will initiate a power attack, doing more damage to your enemies.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>36 Forged Iron</Text>
        <Text style={[styles.list]}>12 Mechanical Parts</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Furious Fists</Text>
      </ScrollView>
    );
  }

export default IronKnucklesItem;