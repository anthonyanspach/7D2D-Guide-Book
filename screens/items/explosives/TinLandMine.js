{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TinLandMineItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Tin Land Mine Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Tin Land Mine is a ground based Explosive, similar to the Hub Cap Land Mine or Air Filter Land Mine, which can be strategically placed on any flat surface except water. If anything steps on it, whether a Zombie, the player, or an animal, the mine will explode. Mines cannot be picked up once placed. The Tin Land Mine is one of the weaker Land Mines, but does not require a Workbench to craft.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Iron</Text>
        <Text style={[styles.list]}>4 Gun Powder</Text>
        <Text style={[styles.list]}>1 Nail</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>
      </ScrollView>
    );
  }

export default TinLandMineItem;


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