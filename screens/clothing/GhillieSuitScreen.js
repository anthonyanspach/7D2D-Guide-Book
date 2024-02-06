{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function GhillieSuitScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ghillie Suit Set Items</Text>

        <TouchableOpacity style={[styles.ghillieButton]} onPress={() => navigation.navigate('GhillieHoodItem')} >

          <Text style={[styles.buttonText]}>Ghillie Suit Hood</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.ghillieButton]} onPress={() => navigation.navigate('GhillieJacketItem')} >

          <Text style={[styles.buttonText]}>Ghillie Suit Jacket</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.ghillieButton]} onPress={() => navigation.navigate('GhilliePantsItem')} >

          <Text style={[styles.buttonText]}>Ghilllie Suit Pants</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default GhillieSuitScreen;