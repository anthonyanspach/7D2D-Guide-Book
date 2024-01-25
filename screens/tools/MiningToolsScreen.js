{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MiningToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Mining Tools</Text>

        <Text style={[styles.text]}>Decription:</Text>
        <Text style={[styles.text]}>Mining Tools are a subset of all the tools used for obtaining basic resources from all objects through mining.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StoneShovelItem')} >

          <Text style={[styles.buttonText]}>Stone Shovel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronShovelItem')} >

          <Text style={[styles.buttonText]}>Iron Shovel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronPickaxeItem')} >

          <Text style={[styles.buttonText]}>Iron Pickaxe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelShovelItem')} >

          <Text style={[styles.buttonText]}>Steel Shovel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelPickaxeItem')} >

          <Text style={[styles.buttonText]}>Steel Pickaxe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('AugerItem')} >

          <Text style={[styles.buttonText]}>Auger</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MiningToolsScreen;

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