{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function PlantFiberScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Plant Fiber Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PlantFiberBootsItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PlantFiberGlovesItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PlantFiberHatItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Hat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PlantFiberHoodItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Hood</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PlantFiberPantsItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Pants</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PlantFiberShirtItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Shirt</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default PlantFiberScreen;