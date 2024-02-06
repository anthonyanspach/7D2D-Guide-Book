{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function DisassemblyToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Disassembly Tools</Text>

        <Text style={[styles.textHeader]}>Decription:</Text>
        <Text style={[styles.text]}>Disassemble Tools are a subset of all the tools used for obtaining additional resources from various mechanical and electrical objects through salvaging.</Text>
        
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('WrenchItem')} >

          <Text style={[styles.buttonText]}>Wrench</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('RatchetItem')} >

          <Text style={[styles.buttonText]}>Ratchet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('ImpactDriverItem')} >

          <Text style={[styles.buttonText]}>Impact Driver</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default DisassemblyToolsScreen;