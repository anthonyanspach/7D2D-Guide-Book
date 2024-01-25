{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkstationsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Workstations</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Workstations can be found across the world in several Points of Interest. Most of these workstations are broken but finding a working one isn't impossible. Settling near a working workstation, especially a forge or a cement mixer, can speed up the player's progression significantly. Every Trader in the world has one instance of each workstation, broken or working, inside their walls. Workstations can also be crafted, looted and bought from a trader if one gets lucky. Advanced Engineering unlocks the recipe for the forge, cement mixer and workbench whereas the Physician unlocks the crafting of a Chemistry Station. Schematics for each workstations can also be found while looting containers but relying on this can slow progression if no suitable schematic is found.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CampfireItem')} >

          <Text style={[styles.buttonText]}>Campfire</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ForgeItem')} >

          <Text style={[styles.buttonText]}>Forge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WorkbenchItem')} >

          <Text style={[styles.buttonText]}>Workbench</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CementMixerItem')} >

          <Text style={[styles.buttonText]}>Cement Mixer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ChemistryStationItem')} >

          <Text style={[styles.buttonText]}>Chemistry Station</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('DewCollectorItem')} >

          <Text style={[styles.buttonText]}>Dew Collector</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WorkstationsScreen;

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
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});