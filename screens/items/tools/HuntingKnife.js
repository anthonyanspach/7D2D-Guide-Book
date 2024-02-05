{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function HuntingKnifeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hunting Knife info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Hunting Knife is a bladed melee weapon that is also quite useful as a butchering tool. -Sneaking attack increases 400% extra damage in A21.-</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>When used in combat, a Hunting Knife is an effective, short range Melee weapon.</Text>
        <Text style={[styles.text]}>Butchering. Clicking the left mouse button will use the Hunting Knife, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Hunting Knife is an effective tool for butchering dead animals.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>24 Forged Iron</Text>
        <Text style={[styles.list]}>12 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Knife Guy</Text>
      </ScrollView>
    );
  }

export default HuntingKnifeItem;