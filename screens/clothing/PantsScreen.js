{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function PantsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pants Categories</Text>

        <TouchableOpacity style={[styles.glassesButton]} title="BDU Bottoms" onPress={() => navigation.navigate('BDUBottomsItem')} >

          <Text style={[styles.buttonText]}>BDU Bottoms</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} title="Denim Pants" onPress={() => navigation.navigate('DenimPantsItem')} >

          <Text style={[styles.buttonText]}>Denim Pants</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} title="Shorts" onPress={() => navigation.navigate('ShortsItem')} >

          <Text style={[styles.buttonText]}>Shorts</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} title="Overalls" onPress={() => navigation.navigate('OverallsItem')} >

          <Text style={[styles.buttonText]}>Overalls</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} title="Skirt" onPress={() => navigation.navigate('SkirtItem')} >

          <Text style={[styles.buttonText]}>Skirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.glassesButton]} title="Suit Pants" onPress={() => navigation.navigate('SuitPantsItem')} >

          <Text style={[styles.buttonText]}>Suit Pants</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default PantsScreen;