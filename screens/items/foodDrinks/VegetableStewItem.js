{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function VegetableStewItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Vegetable Stew Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Vegetable Stew is a Food item that can be cooked using a Cooking Pot on a Campfire with a suitable source of Combustible fuel. Eating Vegetable Stew will have a positive effect on Fullness, Hydration, Stamina, and Health.</Text>

        <Text style={[styles.list]}>Fullness: +31</Text>
        <Text style={[styles.list]}>Hydration: +20</Text>
        <Text style={[styles.list]}>Stamina: +20</Text>
        <Text style={[styles.list]}>Health: +15</Text>
        <Text style={[styles.list]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>2 Potatos</Text>
        <Text style={[styles.list]}>2 Ear of Corn</Text>
        <Text style={[styles.list]}>2 Mushrooms</Text>
        <Text style={[styles.list]}>1 Water</Text>

        <Text style={[styles.list]}>Needed:</Text>
        <Text style={[styles.list]}>Cooking Pot</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default VegetableStewItem;


const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 200,
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
  list: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
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
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});