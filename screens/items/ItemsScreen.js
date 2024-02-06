{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";





function ItemsScreen({ navigation }) {
    return (
        <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]} >
          
          <Text style={[styles.screenHeader]}>Items Categories</Text>

          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('ClothingScreen')} >

            <Text style={[styles.buttonText]}>Clothing</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('ToolsScreen')} >

            <Text style={[styles.buttonText]}>Tools</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('CraftingScreen')} >

            <Text style={[styles.buttonText]}>Crafting</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('MaterialsScreen')} >

            <Text style={[styles.buttonText]}>Materials</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('WeaponsScreen')} >

            <Text style={[styles.buttonText]}>Weapons</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('TrapsTurretsScreen')} >

            <Text style={[styles.buttonText]}>Traps & Turrets</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('ResourcesScreen')} >

            <Text style={[styles.buttonText]}>Resources</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.itemsButton]} onPress={() => navigation.navigate('FoodDrinksScreen')} >

            <Text style={[styles.buttonText]}>Food & Drink</Text>

          </TouchableOpacity>
        </ScrollView>
    );
  }

export default ItemsScreen;