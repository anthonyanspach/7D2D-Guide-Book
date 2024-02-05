{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronCrossbowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Crossbow Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Crossbow is a craftable weapon in 7 Days to Die. It is unlocked after attaining level 1 Archery or reading the Crossbow Schematic.</Text>
        <Text style={[styles.text]}>The Iron Crossbow is a medium to long-range weapon that fires crossbow bolts as Ammunition. It will reload automatically after each shot and, unlike the bows, it can be modded with Scope or Weapon Flashlight.</Text>
        <Text style={[styles.text]}>To equip a different type of ammo than the default Stone Crossbow Bolt, press and hold R, then select the ammo type you want.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Bow / Crossbow Parts</Text>
        <Text style={[styles.list]}>75 Forged Iron</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>100 Wood</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Bow Hunters</Text>
      </ScrollView>
    );
  }

export default IronCrossbowItem;