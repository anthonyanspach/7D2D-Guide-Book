{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function TimedChargeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Timed Charge Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Timed Charge is a Explosive box-shaped charge that applies highly concentrated damage and automatically detonates after 4 seconds. It seems to do a greatly reduced amount of damage when used on regular blocks, so these valuable, yet cheap explosives should be reserved for locked safes, crates and any other container that may be, including player-built storage.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>20 Iron</Text>
        <Text style={[styles.list]}>10 Gun Powder</Text>
        <Text style={[styles.list]}>1 Electrical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Explosive Magazine</Text>
      </ScrollView>
    );
  }

export default TimedChargeItem;