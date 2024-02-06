{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function ScrapArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Scrap Armor Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ScrapBootsItem')} >

          <Text style={[styles.buttonText]}>Scrap Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ScrapChestItem')} >

          <Text style={[styles.buttonText]}>Scrap Chest Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ScrapGlovesItem')} >

          <Text style={[styles.buttonText]}>Scrap Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ScrapHelmetItem')} >

          <Text style={[styles.buttonText]}>Scrap Helmet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ScrapLegItem')} >

          <Text style={[styles.buttonText]}>Scrap Leg Armor</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ScrapArmorScreen;