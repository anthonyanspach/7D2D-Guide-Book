{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function OldOutdoorLightItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Old Outdoor Light</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>"After placing this light you can turn it on and off" The Old Outdoor Light is an electric light source. It requires power, and emits a white light. It is modeled as wall mounted light but can be placed on the ground. The light shines brightly, and it also creates an interesting pattern with the bars on the cage of the light. Old Outdoor Light will not stick to the sides of blocks with zero Structural Integrity like Sand</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>2 Forged Iron</Text>
        <Text style={[styles.list]}>6 Electrical Parts</Text>
      </ScrollView>
    );
  }

export default OldOutdoorLightItem;