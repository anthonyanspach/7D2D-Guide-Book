{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function MetalReinforcedWoodenDoorItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Metal Reinforced Wooden Door Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Metal Reinforced Wooden Door is the upgraded version of a Reinforced Secure Wooden Door.</Text>
        <Text style={[styles.text]}>To craft an Metal Reinforced Wooden Door, upgrade a previously placed Reinforced Secure Wooden Door.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Reinforced Secure Wooden Door</Text>
        <Text style={[styles.list]}>12 Iron</Text>
      </ScrollView>
    );
  }

export default MetalReinforcedWoodenDoorItem;