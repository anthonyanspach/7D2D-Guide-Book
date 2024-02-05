{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function PistolItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pistol Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Pistol is a short to medium range semi-automatic handgun, which can be crafted or found throughout the world of 7 Days to Die in containers, such as weapon bags, gun safes, toilets, and loot bags.</Text>
        <Text style={[styles.text]}>The Pistol requires 9mm Rounds and will hold ~15 bullets. It reloads automatically, if the correct Ammunition is available. It can also be reloaded manually at any time using the reload key (defaults to R).</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Handgun Parts</Text>
        <Text style={[styles.list]}>50 Forged Iron</Text>
        <Text style={[styles.list]}>10 Duct Tape</Text>
        <Text style={[styles.list]}>25 Scrap Polymers</Text>
        <Text style={[styles.list]}>10 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Handgun Magazine</Text>
      </ScrollView>
    );
  }

export default PistolItem;