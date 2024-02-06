{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function SledgehammersScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Sledgehammers</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>

        
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('StoneSledgehammerItem')} >

          <Text style={[styles.buttonText]}>Stone Sledgehammer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronSledgehammerItem')} >

          <Text style={[styles.buttonText]}>Iron Sledgehammer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelSledgehammerItem')} >

          <Text style={[styles.buttonText]}>Steel Sledgehammer</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default SledgehammersScreen;