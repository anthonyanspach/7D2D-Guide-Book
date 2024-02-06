{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function TrapsTurretsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Traps and Turrets</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Apart from a variety of hand held tools, there is also a variety of placeable items that can help deal damage to enemies. The table below lists all of them, with additional stats. Among them are various types of mines, turrets and traps, both triggerable like Dart Trap or Blade Trap, but also giving out damage when walked upon like Wood Spikes and Barbed Fence Wire.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BarbedFenceWireItem')} >

          <Text style={[styles.buttonText]}>Barbed Fence Wire</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BladeTrapItem')} >

          <Text style={[styles.buttonText]}>Blade Trap</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('DartTrapItem')} >

          <Text style={[styles.buttonText]}>Dart Trap</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ElectricFencePostItem')} >

          <Text style={[styles.buttonText]}>Electric Fence Post</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronSpikesItem')} >

          <Text style={[styles.buttonText]}>Iron Spikes</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ShotgunAutoTurretItem')} >

          <Text style={[styles.buttonText]}>Shotgun Auto Turret</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SMGAutoTurretItem')} >

          <Text style={[styles.buttonText]}>SMG Auto Turret</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodSpikesItem')} >

          <Text style={[styles.buttonText]}>Wood Spikes</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default TrapsTurretsScreen;