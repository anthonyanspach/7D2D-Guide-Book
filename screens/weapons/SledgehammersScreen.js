{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SledgehammersScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Sledgehammers</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>

        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StoneSledgehammerItem')} >

          <Text style={[styles.buttonText]}>Stone Sledgehammer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronSledgehammerItem')} >

          <Text style={[styles.buttonText]}>Iron Sledgehammer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelSledgehammerItem')} >

          <Text style={[styles.buttonText]}>Steel Sledgehammer</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default SledgehammersScreen;

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