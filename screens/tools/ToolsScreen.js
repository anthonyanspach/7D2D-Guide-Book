{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>

        <Text style={[styles.screenHeader]}>Tool Categories</Text>

        <Text style={[styles.screenHeader]}>Description:</Text>
        <Text style={[styles.text]}>Tools are items whose function is to make destroying different blocks easier for the player. Different items are better for different tasks such as mining stone, digging clay and chopping wood. Many items can have multiple purposes, as most tools can be used as weapons in a pinch and vice-versa. However, an emphasis has been made to make tools less effective when attacking entities. This can also be seen in some mods for the tools (for example, the Fireman's Axe mod increases block damage, but decreases entity damage). Items also vary on how effective they are for each task. Using the wrong tool will take much longer and, in the case of butchering, might not give as many resources as with the proper tool.</Text>

        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ConstructionToolsScreen')} >

          <Text style={[styles.buttonText]}>Construction Tools</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ButcheringToolsScreen')} >

          <Text style={[styles.buttonText]}>Butchering Tools</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('DisassemblyToolsScreen')} >

          <Text style={[styles.buttonText]}>Disassembly Tools</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MiningToolsScreen')} >

          <Text style={[styles.buttonText]}>Mining Tools</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodcuttingToolsScreen')} >

          <Text style={[styles.buttonText]}>Woodcuttingg Tools</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SpecialToolsScreen')} >

          <Text style={[styles.buttonText]}>Special Tools</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ToolsScreen;

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