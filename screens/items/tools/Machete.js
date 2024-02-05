{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function MacheteItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Machete info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Machete is a bladed melee weapon that is also quite useful as a butchering tool. -Sneaking attack increases 400% extra damage in A21.-</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>When used in combat, a Machete is an effective, short range Melee weapon. Its maximum damage potential and ability to easily dismember zombies make it a valuable melee weapon for silently taking out zombies.</Text>
        <Text style={[styles.text]}>Butchering. Clicking the left mouse button will use the Machete, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Machete is the most effective tool for butchering dead animals.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Machete Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>50 Wood</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Knife Guy</Text>
      </ScrollView>
    );
  }

export default MacheteItem;