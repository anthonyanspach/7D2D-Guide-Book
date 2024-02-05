{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function AK47MachineGunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>AK47 Machine Gun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The AK-47 is a short- to medium-ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the AK-47 uses 7.62mm Rounds as Ammunition. Previously named the AK-47 Assault Rifle and classified as a rifle, the AK-47 is now considered a machine gun in terms of Perks. It has the highest damage output potential out of all the conventional firearms, that lends the AK 47 well to being the player's backup gun to defend against surprise threats while scavenging or collecting resources.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Machine Gun Parts</Text>
        <Text style={[styles.list]}>50 Forged Iron</Text>
        <Text style={[styles.list]}>10 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>10 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tactical Warfare</Text>
      </ScrollView>
    );
  }

export default AK47MachineGunItem;