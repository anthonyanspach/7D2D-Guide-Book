{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function ButcheringToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Butchering Tools</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Butchering Tools are a subset of all the tools used for obtaining additional resources from animal and human remains through butchering.</Text>
        
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('BoneKnifeItem')} >

          <Text style={[styles.buttonText]}>Bone Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('CandyCaneKnifeItem')} >

          <Text style={[styles.buttonText]}>Candy Cane Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('HuntingKnifeItem')} >

          <Text style={[styles.buttonText]}>Hunting Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('MacheteItem')} >

          <Text style={[styles.buttonText]}>Machete</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ButcheringToolsScreen;