{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function FurnitureScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Furniture</Text>

        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('AirConditionerItem')} >

          <Text style={[styles.buttonText]}>Air Conditioner</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('BedrollItem')} >

          <Text style={[styles.buttonText]}>Bedroll</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('BrassFaucetItem')} >

          <Text style={[styles.buttonText]}>Brass Faucet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('WashingMachineItem')} >

          <Text style={[styles.buttonText]}>Washing Machine</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default FurnitureScreen;