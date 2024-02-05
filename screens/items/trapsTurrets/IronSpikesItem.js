{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronSpikesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Spikes Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Iron Spikes are traps used to defend structures by impaling zombies and/or players. Iron Spikes are crafted using 4 Forged Iron. They begin to lose durability after being stepped on by players or zombies and are eventually destroyed. They are often used to surround the parameter of a base or location. Iron Spikes will also slightly slow down zombies as they path through the Iron Spikes trap. Iron Spikes can be crafted or upgraded from Wood Spikes.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Forged Iron</Text>
      </ScrollView>
    );
  }

export default IronSpikesItem;