{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";


function MiningToolsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Mining Tools</Text>

        <Text style={[styles.textHeader]}>Decription:</Text>
        <Text style={[styles.text]}>Mining Tools are a subset of all the tools used for obtaining basic resources from all objects through mining.</Text>
        
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('StoneShovelItem')} >

          <Text style={[styles.buttonText]}>Stone Shovel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('IronShovelItem')} >

          <Text style={[styles.buttonText]}>Iron Shovel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('IronPickaxeItem')} >

          <Text style={[styles.buttonText]}>Iron Pickaxe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SteelShovelItem')} >

          <Text style={[styles.buttonText]}>Steel Shovel</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('SteelPickaxeItem')} >

          <Text style={[styles.buttonText]}>Steel Pickaxe</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('AugerItem')} >

          <Text style={[styles.buttonText]}>Auger</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MiningToolsScreen;