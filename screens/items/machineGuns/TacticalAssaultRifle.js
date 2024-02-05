{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function TacticalAssaultRifleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Tactical Assalt Rifle Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Tactical Assault Rifle is a short- to medium-ranged automatic weapon, affected by the Machine Gunner perk. Similar to other machine guns and rifles, the Tactical Assault Rifle uses 7.62mm Rounds as Ammunition.</Text>
        <Text style={[styles.text]}>It is heavily based on the real-life M4 Carbine, although the M4 fires smaller 5.56×45mm NATO rounds. The rifle would be impossible to fire because of the absence of a rear buffer tube, which is replaced with what appears to be a handsaw.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Machine Fun Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
        <Text style={[styles.list]}>25 Scrap Polymers</Text>
        <Text style={[styles.list]}>15 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tactical Warfare</Text>
      </ScrollView>
    );
  }

export default TacticalAssaultRifleItem;