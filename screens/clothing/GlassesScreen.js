{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function GlassesScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Glasses Categories</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('LuckyGogglesItem')} >

          <Text style={[styles.buttonText]}>Lucky Goggles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('SkiGogglesItem')} >

          <Text style={[styles.buttonText]}>Ski Goggles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('NerdyGlassesItem')} >

          <Text style={[styles.buttonText]}>Nerdy Glasses</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('NightVisionGogglesItem')} >

          <Text style={[styles.buttonText]}>Night Vision Goggles</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ShadesItem')} >

          <Text style={[styles.buttonText]}>Shades</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('ToughGuySunglassesItem')} >

          <Text style={[styles.buttonText]}>Tough Guy Sunglasses</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default GlassesScreen;