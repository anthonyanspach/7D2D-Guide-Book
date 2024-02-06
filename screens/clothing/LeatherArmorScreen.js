{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function LeatherArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Leather Armor Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('LeatherBootsItem')} >

          <Text style={[styles.buttonText]}>Leather Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('LeatherGlovesItem')} >

          <Text style={[styles.buttonText]}>Leather Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('LeatherHoodItem')} >

          <Text style={[styles.buttonText]}>Leather Hood</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('LeatherChestItem')} >

          <Text style={[styles.buttonText]}>Leather Chest Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('LeatherLegItem')} >

          <Text style={[styles.buttonText]}>Leather Leg Armor</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default LeatherArmorScreen;