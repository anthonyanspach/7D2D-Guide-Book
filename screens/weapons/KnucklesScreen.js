{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function KnucklesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Knuckles</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Knuckles are covered under the perk The Brawler. They have quite small range and damage per attack, but offer a fast attack speed and low stamina cost. They have a notable synergy with Beer, which temporarily gives them the highest damage output of any melee weapon.</Text>
        
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('KnuckleWrapsItem')} >

          <Text style={[styles.buttonText]}>Knuckle Wraps</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronKnucklesItem')} >

          <Text style={[styles.buttonText]}>Iron Knuckles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelKnucklesItem')} >

          <Text style={[styles.buttonText]}>Steel Knuckles</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default KnucklesScreen;