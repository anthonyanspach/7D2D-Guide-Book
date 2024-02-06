{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function FaceScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Glasses Categories</Text>

        <TouchableOpacity style={[styles.faceButton]} onPress={() => navigation.navigate('BandanaItem')} >

          <Text style={[styles.buttonText]}>Bandana</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.faceButton]} onPress={() => navigation.navigate('CigarItem')} >

          <Text style={[styles.buttonText]}>Cigar</Text>

        </TouchableOpacity>
        
      </ScrollView>
    );
  }

export default FaceScreen;