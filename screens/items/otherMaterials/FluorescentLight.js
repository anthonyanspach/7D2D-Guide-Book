{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function FluorescentLightItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Fluorescent Light Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Fluorescent Light is an electric light source. It requires power, and emits a light. It is modeled as ceiling mounted light but can be placed on the ground or walls. The light shines brightly. Fluorescent Light will not stick to the sides of blocks with zero Structural Integrity, such as Sand.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>2 Forged Iron</Text>
        <Text style={[styles.list]}>4 Electrical Parts</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Wiring 101</Text>
      </ScrollView>
    );
  }

export default FluorescentLightItem;