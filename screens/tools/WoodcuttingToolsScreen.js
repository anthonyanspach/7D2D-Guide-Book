{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function WoodcuttingToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Woodcutting Tools</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Woodcutting tools are a subset of all the tools used for... cutting wood. Use this tool against a tree looking object and it will have not chance against you. In addition, you will obtain wood for activities.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StoneAxeItem')} >

          <Text style={[styles.buttonText]}>Stone Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('TazaStoneAxeItem')} >

          <Text style={[styles.buttonText]}>Taza's Stone Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronFireaxeItem')} >

          <Text style={[styles.buttonText]}>Iron Fireaxe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelAxeItem')} >

          <Text style={[styles.buttonText]}>Steel Axe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ChainsawItem')} >

          <Text style={[styles.buttonText]}>Chainsaw</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WoodcuttingToolsScreen;

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
    height: '10%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});