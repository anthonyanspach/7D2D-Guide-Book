{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function WoodcuttingToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Woodcutting Tools</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Woodcutting tools are a subset of all the tools used for... cutting wood. Use this tool against a tree looking object and it will have not chance against you. In addition, you will obtain wood for activities.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('StoneAxeItem')} >

          <Text style={[styles.buttonText]}>Stone Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('TazaStoneAxeItem')} >

          <Text style={[styles.buttonText]}>Taza's Stone Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('IronFireaxeItem')} >

          <Text style={[styles.buttonText]}>Iron Fireaxe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SteelAxeItem')} >

          <Text style={[styles.buttonText]}>Steel Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('ChainsawItem')} >

          <Text style={[styles.buttonText]}>Chainsaw</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WoodcuttingToolsScreen;