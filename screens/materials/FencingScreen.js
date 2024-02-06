{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function FencingScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Fencing</Text>
        
        <TouchableOpacity style={[styles.windowButton]} onPress={() => navigation.navigate('WoodFenceItem')} >

          <Text style={[styles.buttonText]}>Wood Fence</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default FencingScreen;