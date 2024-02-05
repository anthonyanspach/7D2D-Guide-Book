{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CompoundCrossbowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Compound Crossbow Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Compound Crossbow is stronger version of Iron Crossbow, unlocked after reading the Compound Crossbow Schematic.</Text>

        <Text style={[styles.text]}>The Compound Crossbow is a medium to long-range weapon that fires crossbow bolts as Ammunition. It will not reload automatically after each shot, unlike the bows.</Text>
        <Text style={[styles.text]}>To equip a different type of ammo than the default Stone Crossbow Bolt, press and hold R, then select the ammo type you want.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Bow / Crossbow Parts</Text>
        <Text style={[styles.list]}>75 Forged Steel</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>100 Scrap Polymers</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Bow Hunters</Text>
      </ScrollView>
    );
  }

export default CompoundCrossbowItem;