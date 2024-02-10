{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../assets/styles/Styles";



function HomeScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>

        <Text style={[styles.screenHeader]}>7 Days to Die Survival HandBook</Text>

        <Image
          source={require('../assets/7DAYS_LOGO_Horizontal_black.png')}
          style={{
            height: 200,
            width: 400,
            alignSelf: 'center',
          }}
        />

        <Text style={[styles.textHeader]}>7 Days to Die is a new survival horde crafting game from The Fun Pimps:</Text>
        <Text style={[styles.text]}>7 Days to Die has defined the survival genre, with unrivaled crafting and world-building content. Set in a brutally unforgiving post-apocalyptic world overrun by the undead, 7 Days to Die is an open-world game that is a unique combination of first person shooter, survival horror, tower defense, and role-playing games. It presents combat, crafting, looting, mining, exploration, and character growth, in a way that has seen a rapturous response from fans worldwide. Play the definitive zombie survival sandbox RPG that came first. Navezgane awaits!</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StartingGuide')} >

          <Text style={[styles.buttonText]}>Starting Guide</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ItemsScreen')} >

          <Text style={[styles.buttonText]}>Items</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MechanicsScreen')} >

          <Text style={[styles.buttonText]}>Mechanics</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SearchScreen')} >

          <Text style={[styles.buttonText]}>Search</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HomeScreen;