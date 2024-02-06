{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function WindowsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Window</Text>

        <TouchableOpacity style={[styles.windowButton]} onPress={() => navigation.navigate('WoodWindowItem')} >

          <Text style={[styles.buttonText]}>Wood Window</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default WindowsScreen;