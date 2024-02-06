{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function RoboticTurretsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Robotic Turrets</Text>

        <Text style={[styles.textHeader]}>Decription:</Text>
        <Text style={[styles.text]}>Robotic turrets are covered under the perk Robotics Inventor. They offer a unique portable weapons that can be used as a normal weapon or placed to attack on their own. Together with the stun baton they offer a solid DPS to enemies.</Text>
        
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('RoboticSledgeItem')} >

          <Text style={[styles.buttonText]}>Robotic Sledge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('RoboticTurretItem')} >

          <Text style={[styles.buttonText]}>Robotic Turret</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default RoboticTurretsScreen;