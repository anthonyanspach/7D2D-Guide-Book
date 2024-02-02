{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RoboticSledgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Robotic Sledge Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Robotic Sledge is the simplest form of a turret that can be used automatically or manually for defense. The Robotic Sledge is only active when the owner moves within range of the turret.</Text>
        <Text style={[styles.text]}>The perk Robotics Inventor, one of the Intellect skills, can be upgraded to improve the use of the Robotic Turret.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Robotics Parts</Text>
        <Text style={[styles.list]}>200 Forged Steel</Text>
        <Text style={[styles.list]}>50 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>50 Springs</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Tech Planet</Text>
      </ScrollView>
    );
  }

export default RoboticSledgeItem;


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