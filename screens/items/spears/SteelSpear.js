{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function SteelSpearItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Spear Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Steel Spear is a tier 3 Spear which can be used as a one-handed melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Steel Spear Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>50 Wood</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>
      </ScrollView>
    );
  }

export default SteelSpearItem;