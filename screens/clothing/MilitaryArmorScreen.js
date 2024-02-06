{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function MilitaryArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Military Armor Set Items</Text>

        <TouchableOpacity style={[styles.overcoatsButton]} title="Military Boots" onPress={() => navigation.navigate('MilitaryBootsItem')} >

          <Text style={[styles.buttonText]}>Military Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} title="Military Stealth Boots" onPress={() => navigation.navigate('MilitaryStealthBootsItem')} >

          <Text style={[styles.buttonText]}>Military Stealth Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} title="Military Gloves" onPress={() => navigation.navigate('MilitaryGlovesItem')} >

          <Text style={[styles.buttonText]}>Military Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} title="Military Helmet" onPress={() => navigation.navigate('MilitaryHelmetItem')} >

          <Text style={[styles.buttonText]}>Military Helmet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} title="Military Leg Armor" onPress={() => navigation.navigate('MilitaryLegItem')} >

          <Text style={[styles.buttonText]}>Military Leg Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} title="Military Vest" onPress={() => navigation.navigate('MilitaryVestItem')} >

          <Text style={[styles.buttonText]}>Military Vest</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.overcoatsButton]} title="Mining Helmet" onPress={() => navigation.navigate('MiningHelmetItem')} >

          <Text style={[styles.buttonText]}>Mining Helmet</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MilitaryArmorScreen;