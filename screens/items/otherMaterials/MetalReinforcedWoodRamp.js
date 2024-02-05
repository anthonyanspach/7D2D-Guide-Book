{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function MetalReinforcedWoodRampItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Metal Reinforced Wood Ramp Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Metal Reinforced Wood Ramp is a the upgraded version of a Reinforced Wood Ramp. It can not be crafted using other materials, the only ways to obtain a Metal Reinforced Wood Ramp are through upgrading a Reinforced Wood Ramp or using the Creative Menu. It is not possible to use a Metal Reinforced Wood Ramp as a source of Combustible fuel.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Reinforced Wood Ramp</Text>
        <Text style={[styles.list]}>10 Iron</Text>
      </ScrollView>
    );
  }

export default MetalReinforcedWoodRampItem;