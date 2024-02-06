{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function BootsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Boots Categories</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('HighPerfRunShoesItem')} >

          <Text style={[styles.buttonText]}>Hi - Pro Running Shoes</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('CowboyBootsItem')} >

          <Text style={[styles.buttonText]}>Cowboy Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('DressShoesItem')} >

          <Text style={[styles.buttonText]}>Dress Shoes</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('GothicBootsItem')} >

          <Text style={[styles.buttonText]}>Gothic Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('RunningShoesItem')} >

          <Text style={[styles.buttonText]}>Running Shoes</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('WornBootsItem')} >

          <Text style={[styles.buttonText]}>Worn Boots</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BootsScreen;