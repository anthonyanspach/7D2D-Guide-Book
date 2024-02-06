{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function IronArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Armor Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronBootsItem')} >

          <Text style={[styles.buttonText]}>Iron Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronChestItem')} >

          <Text style={[styles.buttonText]}>Iron Chest Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronGlovesItem')} >

          <Text style={[styles.buttonText]}>Iron Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronHelmetItem')} >

          <Text style={[styles.buttonText]}>Iron Helmet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('IronLegItem')} >

          <Text style={[styles.buttonText]}>Iron Leg Armor</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default IronArmorScreen;