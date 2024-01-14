{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ItemsScreen({ navigation }) {
    return (
        <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]} >
          
          <Text style={[styles.screenHeader]}>Items Categories</Text>

          <View style={[styles.container]}>

          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ClothingScreen')} >

            <Text style={[styles.buttonText]}>Clothing</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ToolsScreen')} >

            <Text style={[styles.buttonText]}>Tools</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CraftingScreen')} >

            <Text style={[styles.buttonText]}>Crafting</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MaterialsScreen')} >

            <Text style={[styles.buttonText]}>Materials</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WeaponsScreen')} >

            <Text style={[styles.buttonText]}>Weapons</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('TrapsTurretsScreen')} >

            <Text style={[styles.buttonText]}>Traps & Turrets</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ResourcesScreen')} >

            <Text style={[styles.buttonText]}>Resources</Text>

          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('FoodDrinksScreen')} >

            <Text style={[styles.buttonText]}>Food & Drink</Text>

          </TouchableOpacity>
            
          </View>
        </ScrollView>
    );
  }

export default ItemsScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    height: '100%',
  },
  container: {
    backgroundColor: 'rgb(20, 20, 20)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    flex: 1,
    paddingVertical: 10,
  },
  text: {
    color: 'red',
    marginBottom: 5,
    marginHorizontal: 5,
  },
  screenHeader: {
    color: 'red',
    fontSize: 35,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionHeader: {
    color: 'red',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 5,
    alignItems: 'center',
    height: '10%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});