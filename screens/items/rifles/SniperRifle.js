{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SniperRifleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Sniper Rifle Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Sniper Rifle is a ranged weapon in 7 Days to Die. It can be looted from Supply Crates, Shotgun Messiah Crates and Munitions Boxes or it can also be crafted. The Sniper Rifle uses 7.62mm Bullets as Ammunition and can hold ~12 rounds. A Sniper Rifle will reload automatically or it can be done manually by pressing the reload key (default key 'R').</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Rifle Parts</Text>
        <Text style={[styles.list]}>150 Forged Steel</Text>
        <Text style={[styles.list]}>50 Duct Tape</Text>
        <Text style={[styles.list]}>200 Scrap Polymers</Text>
        <Text style={[styles.list]}>60 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Rifle World</Text>
      </ScrollView>
    );
  }

export default SniperRifleItem;