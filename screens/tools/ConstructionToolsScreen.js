{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function ConstructionToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Construction Tools</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Construction (or Repair) tools are a subset of all the tools capable of repairing and upgrading different kinds of blocks.</Text>

        
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('StoneAxeItem')} >

          <Text style={[styles.buttonText]}>Stone Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('TazaStoneAxeItem')} >

          <Text style={[styles.buttonText]}>Taza's Stone Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ClawHammerItem')} >

          <Text style={[styles.buttonText]}>Claw Hammer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('NailgunItem')} >

          <Text style={[styles.buttonText]}>NailGun</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ConstructionToolsScreen;