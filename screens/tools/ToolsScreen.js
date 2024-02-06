{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function ToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>

        <Text style={[styles.screenHeader]}>Tool Categories</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
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