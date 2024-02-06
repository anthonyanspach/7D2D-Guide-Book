{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function WeaponsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Spears</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Spears are covered under the perk Spear Master. They offer a longer range than other melee weapons. As of Alpha 21 spears can no longer be thrown.</Text>
        
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('StoneSpearItem')} >

          <Text style={[styles.buttonText]}>Stone Spear</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronSpearItem')} >

          <Text style={[styles.buttonText]}>Iron Spear</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelSpearItem')} >

          <Text style={[styles.buttonText]}>Steel Spear</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WeaponsScreen;