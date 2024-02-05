{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronSpearItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Spear Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Spear is a tier 2 Spear which can be used as a melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>48 Forged Iron</Text>
        <Text style={[styles.list]}>30 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>
      </ScrollView>
    );
  }

export default IronSpearItem;