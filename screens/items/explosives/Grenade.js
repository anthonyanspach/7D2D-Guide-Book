{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function GrenadeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Grenade Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Grenade is a throwable Explosive weapon good for damaging groups of Zombies or other players. Once primed and thrown or dropped the Grenade will detonate within a few seconds. For an alternate option to the Grenade is the Contact Grenade which detonates on contact rather than a timer.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Mechanical Part</Text>
        <Text style={[styles.list]}>14 Gun Powder</Text>
        <Text style={[styles.list]}>4 Forged Iron</Text>
        <Text style={[styles.list]}>1 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Explosive Magazine</Text>
      </ScrollView>
    );
  }

export default GrenadeItem;