{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function KnucklesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Knuckles</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Knuckles are covered under the perk The Brawler. They have quite small range and damage per attack, but offer a fast attack speed and low stamina cost. They have a notable synergy with Beer, which temporarily gives them the highest damage output of any melee weapon.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('KnuckleWrapsItem')} >

          <Text style={[styles.buttonText]}>Knuckle Wraps</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronKnucklesItem')} >

          <Text style={[styles.buttonText]}>Iron Knuckles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelKnucklesItem')} >

          <Text style={[styles.buttonText]}>Steel Knuckles</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default KnucklesScreen;

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