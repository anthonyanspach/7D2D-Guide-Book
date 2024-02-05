{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function RoboticSledgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Robotic Sledge Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Robotic Sledge is the simplest form of a turret that can be used automatically or manually for defense. The Robotic Sledge is only active when the owner moves within range of the turret.</Text>
        <Text style={[styles.text]}>The perk Robotics Inventor, one of the Intellect skills, can be upgraded to improve the use of the Robotic Turret.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Robotics Parts</Text>
        <Text style={[styles.list]}>200 Forged Steel</Text>
        <Text style={[styles.list]}>50 Duct Tape</Text>
        <Text style={[styles.list]}>50 Scrap Polymers</Text>
        <Text style={[styles.list]}>50 Springs</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Tech Planet</Text>
      </ScrollView>
    );
  }

export default RoboticSledgeItem;