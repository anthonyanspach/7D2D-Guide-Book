{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function PaddedArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Padded Armor Set Items</Text>

        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PaddedGlovesItem')} >

          <Text style={[styles.buttonText]}>Padded Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PaddedHoodItem')} >

          <Text style={[styles.buttonText]}>Padded Hood</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PaddedChestItem')} >

          <Text style={[styles.buttonText]}>Padded Chest Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PaddedLegItem')} >

          <Text style={[styles.buttonText]}>Padded Leg Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} onPress={() => navigation.navigate('PaddedBootsItem')} >

          <Text style={[styles.buttonText]}>Padded Boots</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default PaddedArmorScreen;