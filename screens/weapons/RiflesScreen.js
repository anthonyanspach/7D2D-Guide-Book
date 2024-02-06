{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function RiflesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Rifles</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Rifles are covered under the perk Dead Eye. They offer the longest range a weapon has with a high damage per bullet. At the downside is the slow attack speed and small magazine capacity.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PipeRifleItem')} >

          <Text style={[styles.buttonText]}>Pipe Rifle</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('HuntingRifleItem')} >

          <Text style={[styles.buttonText]}>Hunting Rifle</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('LeverActionRifleItem')} >

          <Text style={[styles.buttonText]}>Lever-Action Rifle</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SniperRifleItem')} >

          <Text style={[styles.buttonText]}>Sniper Rifle</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default RiflesScreen;