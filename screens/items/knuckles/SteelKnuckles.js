{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelKnucklesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Knuckles Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Steel Knuckles is a tier 3 brawling weapon used to pummel your enemies.</Text>

        <Text style={[styles.text]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, Steel Knuckles is a short-range melee weapon. Left-clicking performs a basic melee attack, while right-clicking initiates a power attack, dealing more damage to enemies.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Steel Knuckles Parts</Text>
        <Text style={[styles.list]}>50 Forged Steel</Text>
        <Text style={[styles.list]}>15 Leather</Text>
        <Text style={[styles.list]}>15 Duct Tape</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Furious Fists</Text>
      </ScrollView>
    );
  }

export default SteelKnucklesItem;


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