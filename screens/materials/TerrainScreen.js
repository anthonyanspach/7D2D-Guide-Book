{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function TerrainScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Terrain</Text>

        <TouchableOpacity style={[styles.windowButton]} onPress={() => navigation.navigate('AsphaltItem')} >

          <Text style={[styles.buttonText]}>Asphalt</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default TerrainScreen;