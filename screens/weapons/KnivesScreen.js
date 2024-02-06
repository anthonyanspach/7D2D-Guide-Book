{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function KnivesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Knives</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Knives are covered under the perk Deep Cuts. They offer a lower range and damage per attack, but higher attack speed and debuffs such as bleeding that deal damage. Knives also have boosted damage when hitting zombies that are unaware of the player.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('BoneKnifeItem')} >

          <Text style={[styles.buttonText]}>Bone Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('CandyCaneKnifeItem')} >

          <Text style={[styles.buttonText]}>Candy Cane Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('HuntingKnifeItem')} >

          <Text style={[styles.buttonText]}>Hunting Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('MacheteItem')} >

          <Text style={[styles.buttonText]}>Machete</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default KnivesScreen;