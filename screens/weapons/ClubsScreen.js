{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WorkstationsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Clubs</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Clubs and bats are covered under the perk Pummel Pete. They offer a balance between attack speed and damage. Sledgehammers are covered under the perk Skull Crusher. They, on the other hand, deal the most melee damage of all weapons in a single hit, but trade the power to the very slow attack speed. One misplaced hit could cost the player their life.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodenClubItem')} >

          <Text style={[styles.buttonText]}>Wooden Club</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CandyCaneClubItem')} >

          <Text style={[styles.buttonText]}>Candy Cane Club</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelClubItem')} >

          <Text style={[styles.buttonText]}>Steel Club</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BaseballBatItem')} >

          <Text style={[styles.buttonText]}>Baseball Bat</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WorkstationsScreen;

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