{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PumpShotgunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pump Shotgun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Pump Shotgun is a pump-action firearm that can be found/looted or crafted in 7 Days to Die. The Shotgun can use either Shotgun Shells or Shotgun Slugs as Ammunition and when empty will reload automatically or manually using the reload key (default key 'R').</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Shotgun Parts</Text>
        <Text style={[styles.list]}>75 Forged Steel</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>100 Scrap Polymers</Text>
        <Text style={[styles.list]}>15 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Shotgun Weekly</Text>
      </ScrollView>
    );
  }

export default PumpShotgunItem;