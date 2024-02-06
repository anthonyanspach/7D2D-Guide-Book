{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function HatsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hats Categories</Text>

        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('BaseballCapItem')} >

          <Text style={[styles.buttonText]}>Baseball Cap</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('CowboyHatItem')} >

          <Text style={[styles.buttonText]}>Cowboy Hat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('PressboyCapItem')} >

          <Text style={[styles.buttonText]}>Press Boy Cap</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.hatsButton]} onPress={() => navigation.navigate('SkullCapItem')} >

          <Text style={[styles.buttonText]}>Skull Cap</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HatsScreen;