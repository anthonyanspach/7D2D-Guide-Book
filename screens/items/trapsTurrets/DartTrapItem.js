{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DartTrapItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Dart Trap Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>When powered with Electricity, the Dart Trap launches Iron Darts in a straight line up to a maximum distance of 26 blocks with a cadence of one projectile per second.</Text>

        <Text style={[styles.text]}>Iron darts deal good damage for a small cost, making dart traps very efficient at damaging zombies.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>Dart traps are amazing at passively dealing with the Heatmap mechanics of the game. For instance, setting up dart traps and a pressure plate in front a door that leads to a dew collector farm (which are notable in A21 for generating large amounts of heat) will prevent screaming zombies from damaging the door and eventually breaking in.</Text>

        <Text style={[styles.text]}>They are also one of the best tool for base defense on horde night available to the player, assuming zombies are funneled through a long corridor. This tactic is made even more effective with the added use of the Electric Fence Post trap.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>31 Forged Iron</Text>
        <Text style={[styles.list]}>9 Mechanical Parts</Text>
        <Text style={[styles.list]}>6 Electrical Parts</Text>
        <Text style={[styles.list]}>7 Oil</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Electrical Traps</Text>
      </ScrollView>
    );
  }

export default DartTrapItem;


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