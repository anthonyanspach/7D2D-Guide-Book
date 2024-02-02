{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BaseballBatItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Baseball Bat Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Baseball Bat is a tier 2 Club - a melee weapon used to pummel your enemies.</Text>

        <Text style={[styles.text]}>Combat:</Text>
        <Text style={[styles.text]}>During combat, the Baseball Bat is a short range melee weapon. Using the primary click (default left mouse button) will swing the Baseball Bat, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage and increase its chance of causing a knockdown effect on an enemy.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>60 Forged Iron</Text>
        <Text style={[styles.list]}>30 Wood</Text>
        <Text style={[styles.list]}>3 Leather</Text>
        <Text style={[styles.list]}>3 Duct Tape</Text>
      </ScrollView>
    );
  }

export default BaseballBatItem;


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