{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function HazmatSuitScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hazmat Suit Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('HazmatBootsItem')} >

          <Text style={[styles.buttonText]}>Hazmat Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('HazmatGlovesItem')} >

          <Text style={[styles.buttonText]}>Hazmat Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('HazmatMaskItem')} >

          <Text style={[styles.buttonText]}>Hazmat Mask</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('HazmatPantsItem')} >

          <Text style={[styles.buttonText]}>Hazmat Pants</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('HazmatShirtItem')} >

          <Text style={[styles.buttonText]}>Hazmat Shirt</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HazmatSuitScreen;