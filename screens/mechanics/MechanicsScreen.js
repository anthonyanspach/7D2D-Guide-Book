{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MechanicsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>

        <Text style={[styles.screenHeader]}>Mechanics</Text>
        <Text style={[styles.text]}>There are a lot of different game mechanics which are briefly summarized here. This is not intended as a tutorial or guide, but an overview of information about game mechanics</Text>

        

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SurvivalScreen')} >

          <Text style={[styles.buttonText]}>Survival</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CombatDamageScreen')} >

        <Text style={[styles.buttonText]}>Combat & Damage</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LevelingSystemScreen')} >

          <Text style={[styles.buttonText]}>Leveling</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CraftingSystemScreen')} >

          <Text style={[styles.buttonText]}>Crafting</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('RepairingItemScreen')} >

          <Text style={[styles.buttonText]}>Repairing Items</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ItemSystemScreen')} >

          <Text style={[styles.buttonText]}>Item</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MenuInterfaceScreen')} >

          <Text style={[styles.buttonText]}>Menu Interface</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ResourcesSystemScreen')} >

          <Text style={[styles.buttonText]}>Resources</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ConstructingBuildingsScreen')} >

          <Text style={[styles.buttonText]}>Contructing Buildings</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('AmbienceSystemScreen')} >

          <Text style={[styles.buttonText]}>Ambience</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ZombiesScreen')} >

          <Text style={[styles.buttonText]}>Zombies</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ElectricityScreen')} >

          <Text style={[styles.buttonText]}>Electricity</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HealthSystemScreen')} >

          <Text style={[styles.buttonText]}>Heath</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MiningSystemScreen')} >

          <Text style={[styles.buttonText]}>Mining</Text>

        </TouchableOpacity>

        
      </ScrollView>
    );
  }

export default MechanicsScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 300,
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