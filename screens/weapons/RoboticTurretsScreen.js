{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RoboticTurretsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Robotic Turrets</Text>

        <Text style={[styles.text]}>Decription:</Text>
        <Text style={[styles.text]}>Robotic turrets are covered under the perk Robotics Inventor. They offer a unique portable weapons that can be used as a normal weapon or placed to attack on their own. Together with the stun baton they offer a solid DPS to enemies.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('RoboticSledgeItem')} >

          <Text style={[styles.buttonText]}>Robotic Sledge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('RoboticTurretItem')} >

          <Text style={[styles.buttonText]}>Robotic Turret</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default RoboticTurretsScreen;


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
    height: '17%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});