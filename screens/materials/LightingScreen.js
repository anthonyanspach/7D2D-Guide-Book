{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function LightingScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Lighting Items</Text>
        
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('BasicLightBulbItem')} >

          <Text style={[styles.buttonText]}>Basic Light Bulb</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('BurningBarrelItem')} >

          <Text style={[styles.buttonText]}>Burning Barrel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('CandleItem')} >

          <Text style={[styles.buttonText]}>Candle</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('OldOutdoorLightItem')} >

          <Text style={[styles.buttonText]}>Old Outdoor Light</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default LightingScreen;