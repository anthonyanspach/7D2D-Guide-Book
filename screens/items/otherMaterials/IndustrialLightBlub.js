{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function IndustrialLightBlubItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Industrial Light Bulb Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Provides light when hooked up to a power source like a Generator or Battery Bank. Use the Wiring Tool to connect a power source to the Industrial Light Bulb and you should be able to turn it on. Repair with Forged Iron and Electrical Parts.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Forged Iron</Text>
        <Text style={[styles.list]}>4 Electrical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Wiring 101</Text>
      </ScrollView>
    );
  }

export default IndustrialLightBlubItem;