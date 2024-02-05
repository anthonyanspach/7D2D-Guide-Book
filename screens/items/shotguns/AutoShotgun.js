{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function AutoShotgunItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Auto Shotgun Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Automatic Shotgun is a tier 3 shotgun, after Double Barrel and Pump shotguns.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Shotgun Parts</Text>
        <Text style={[styles.list]}>150 Forged Steel</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>200 Scrap Polymers</Text>
        <Text style={[styles.list]}>20 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Shotgun Weekly</Text>
      </ScrollView>
    );
  }

export default AutoShotgunItem;