{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function BowsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Bows</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Bows and crossbows are covered under the perk Archery. They offer a quiet and efficient way to deal with zombies and other enemies. They need to reload after every shot and have a slow attack speed, which is counterbalanced by having an innate boost to stealth damage.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('PrimitiveBowItem')} >

          <Text style={[styles.buttonText]}>Primitive Bow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('WoodenBowItem')} >

          <Text style={[styles.buttonText]}>Wooden Bow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('IronCrossbowItem')} >

          <Text style={[styles.buttonText]}>Iron Crossbow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('CompoundBowItem')} >

          <Text style={[styles.buttonText]}>Compound Bow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('CompoundCrossbowItem')} >

          <Text style={[styles.buttonText]}>Compound Crossbow</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BowsScreen;