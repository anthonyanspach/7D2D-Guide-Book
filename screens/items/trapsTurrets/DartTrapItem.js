{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function DartTrapItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Dart Trap Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>When powered with Electricity, the Dart Trap launches Iron Darts in a straight line up to a maximum distance of 26 blocks with a cadence of one projectile per second.</Text>

        <Text style={[styles.text]}>Iron darts deal good damage for a small cost, making dart traps very efficient at damaging zombies.</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>Dart traps are amazing at passively dealing with the Heatmap mechanics of the game. For instance, setting up dart traps and a pressure plate in front a door that leads to a dew collector farm (which are notable in A21 for generating large amounts of heat) will prevent screaming zombies from damaging the door and eventually breaking in.</Text>

        <Text style={[styles.text]}>They are also one of the best tool for base defense on horde night available to the player, assuming zombies are funneled through a long corridor. This tactic is made even more effective with the added use of the Electric Fence Post trap.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>31 Forged Iron</Text>
        <Text style={[styles.list]}>9 Mechanical Parts</Text>
        <Text style={[styles.list]}>6 Electrical Parts</Text>
        <Text style={[styles.list]}>7 Oil</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Electrical Traps</Text>
      </ScrollView>
    );
  }

export default DartTrapItem;