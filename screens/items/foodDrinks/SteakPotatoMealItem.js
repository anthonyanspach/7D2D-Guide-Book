{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteakPotatoMealItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Steak and Potato Meal Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Steak and Potato Meal is a Food item that can be cooked using a Cooking Grill on a Campfire with a suitable source of Combustible fuel. Eating Steak and Potato Meal will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text style={[styles.list]}>Fullness: +50</Text>
        <Text style={[styles.list]}>Hydration: 0</Text>
        <Text style={[styles.list]}>Stamina: +20</Text>
        <Text style={[styles.list]}>Health: +25</Text>
        <Text style={[styles.list]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Raw Meat</Text>
        <Text style={[styles.list]}>2 Potatos</Text>
        <Text style={[styles.list]}>2 Mushrooms</Text>
        <Text style={[styles.list]}>1 Animal Fat</Text>

        <Text style={[styles.list]}>Needed:</Text>
        <Text style={[styles.list]}>Cooking Grill</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default SteakPotatoMealItem;


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