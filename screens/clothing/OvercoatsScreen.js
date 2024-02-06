{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function OvercoatsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Overcoats Categories</Text>

        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('LeatherPonchoItem')} >

          <Text style={[styles.buttonText]}>Leather Poncho</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('CollegeJacketItem')} >

          <Text style={[styles.buttonText]}>College Jacket</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('JacketItem')} >

          <Text style={[styles.buttonText]}>Jacket</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('LeatherDusterItem')} >

          <Text style={[styles.buttonText]}>LeatherDuster</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('PufferCoatItem')} >

          <Text style={[styles.buttonText]}>Puffer Coat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} onPress={() => navigation.navigate('SuitJacketItem')} >

          <Text style={[styles.buttonText]}>Suit Jacket</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default OvercoatsScreen;