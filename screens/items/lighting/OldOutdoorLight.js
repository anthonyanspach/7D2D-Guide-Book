{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function OldOutdoorLightItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Old Outdoor Light</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>"After placing this light you can turn it on and off" The Old Outdoor Light is an electric light source. It requires power, and emits a white light. It is modeled as wall mounted light but can be placed on the ground. The light shines brightly, and it also creates an interesting pattern with the bars on the cage of the light. Old Outdoor Light will not stick to the sides of blocks with zero Structural Integrity like Sand</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>2 Forged Iron</Text>
        <Text style={[styles.list]}>6 Electrical Parts</Text>
      </ScrollView>
    );
  }

export default OldOutdoorLightItem;


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