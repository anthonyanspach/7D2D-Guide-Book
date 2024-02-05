{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SMGItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>SMG Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>An SMG-5 (sub-machine gun) is a rapid fire ranged weapon, which can be crafted or found throughout the world of 7 Days to Die in containers, such as weapon bags, Gun Safes, Crates, and Loot bags. The SMG uses 9mm Ammo and will hold ~28 bullets. Despite being called a sub-machine gun, it uses the Agility statistic shared with Pistol style perks instead, since it uses 9mm Ammo.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Handgun Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>15 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Handgun Magazine</Text>
      </ScrollView>
    );
  }

export default SMGItem;