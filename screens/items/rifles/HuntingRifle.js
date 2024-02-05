{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function HuntingRifleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hunting Rifle Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Hunting Rifle is a medium to long range bolt action firearm which can be found throughout the world in 7 Days to Die. It is an uncommon weapon but it's craftable. This weapon requires the 7.62mm Bullet and only holds one cartridge at a time. It will reload automatically if the player is carrying the correct Ammunition or it can be done manually at any time using the reload key (default key R ).</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Rifle Parts</Text>
        <Text style={[styles.list]}>50 Forged Iron</Text>
        <Text style={[styles.list]}>10 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>10 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Rifle World</Text>
      </ScrollView>
    );
  }

export default HuntingRifleItem;