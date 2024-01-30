{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function KnivesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Knives</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Knives are covered under the perk Deep Cuts. They offer a lower range and damage per attack, but higher attack speed and debuffs such as bleeding that deal damage. Knives also have boosted damage when hitting zombies that are unaware of the player.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BoneKnifeItem')} >

          <Text style={[styles.buttonText]}>Bone Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CandyCaneKnifeItem')} >

          <Text style={[styles.buttonText]}>Candy Cane Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HuntingKnifeItem')} >

          <Text style={[styles.buttonText]}>Hunting Knife</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MacheteItem')} >

          <Text style={[styles.buttonText]}>Machete</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default KnivesScreen;


const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 200,
  },
  container: {
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 10,
    
  },
  text: {
    color: 'red',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  list: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
  },
  screenHeader: {
    color: 'red',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    height: '14%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});