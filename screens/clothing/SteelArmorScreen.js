{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function SteelArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steel Armor Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelBootsItem')} >

          <Text style={[styles.buttonText]}>Steel Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelChestItem')} >

          <Text style={[styles.buttonText]}>Steel Chest Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelGlovesItem')} >

          <Text style={[styles.buttonText]}>Steel Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelHelmetItem')} >

          <Text style={[styles.buttonText]}>Steel Helmet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SteelLegItem')} >

          <Text style={[styles.buttonText]}>Steel Leg Armor</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default SteelArmorScreen;