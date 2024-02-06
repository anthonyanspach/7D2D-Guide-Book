{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function MachineGunsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Machine Guns</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Machine guns are covered under the perk Machine Gunner. They offer a balance between damage and fire rate while having the largest magazines.</Text>
        
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('PipeMachineGunItem')} >

          <Text style={[styles.buttonText]}>Pipe Machine Gun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('AK47MachineGunItem')} >

          <Text style={[styles.buttonText]}>AK-47 Machine Gun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('TacticalAssaultRifleItem')} >

          <Text style={[styles.buttonText]}>Tactical Assault Rifle</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('M60MachineGunItem')} >

          <Text style={[styles.buttonText]}>M60 Machine Gun</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MachineGunsScreen;