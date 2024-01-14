{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ToolsScreen({ navigation }) {
    return (
      <View style={[styles.container]}>

        <Text style={[styles.screenHeader]}>Tool Categories</Text>

        <Text style={[styles.screenHeader]}>Description:</Text>
        <Text style={[styles.text]}>Tools are items whose function is to make destroying different blocks easier for the player. Different items are better for different tasks such as mining stone, digging clay and chopping wood. Many items can have multiple purposes, as most tools can be used as weapons in a pinch and vice-versa. However, an emphasis has been made to make tools less effective when attacking entities. This can also be seen in some mods for the tools (for example, the Fireman's Axe mod increases block damage, but decreases entity damage). Items also vary on how effective they are for each task. Using the wrong tool will take much longer and, in the case of butchering, might not give as many resources as with the proper tool.</Text>

        
        <Button title="Construction Tools" onPress={() => navigation.navigate('ConstructionToolsScreen')} />
        <Button title="Butchering Tools" onPress={() => navigation.navigate('ButcheringToolsScreen')} />
        <Button title="Disassembly Tools" onPress={() => navigation.navigate('DisassemblyToolsScreen')} />
        <Button title="Mining Tools" onPress={() => navigation.navigate('MiningToolsScreen')} />
        <Button title="Woodcuttingg Tools" onPress={() => navigation.navigate('WoodcuttingToolsScreen')} />
        <Button title="Special Tools" onPress={() => navigation.navigate('SpecialToolsScreen')} />
      </View>
    );
  }

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: '30%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});