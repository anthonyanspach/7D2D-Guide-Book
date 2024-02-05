{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function CompoundBowItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Compound Bow Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Compound Bow is the strongest Bow in 7 Days to Die.</Text>
        <Text style={[styles.text]}>It is a medium-range weapon that fires arrows as Ammunition. To equip a different type of arrow, press and hold R, then select the ammo type you want.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Bow / Crossbow Parts</Text>
        <Text style={[styles.list]}>125 Scrap Polymers</Text>
        <Text style={[styles.list]}>25 Leather</Text>
        <Text style={[styles.list]}>25 Duct Tape</Text>
        <Text style={[styles.list]}>50 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Bow Hunters</Text>
      </ScrollView>
    );
  }

export default CompoundBowItem;