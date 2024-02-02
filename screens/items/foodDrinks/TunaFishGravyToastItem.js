{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function TunaFishGravyToastItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Tuna Fish Gravy Toast Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Tuna Fish Gravy Toast is a late-game food item. Eating Tuna Fish Gravy Toast will have a positive effect on Fullness, Stamina, and Health.</Text>

        <Text style={[styles.list]}>Fullness: +90</Text>
        <Text style={[styles.list]}>Hydration: 0</Text>
        <Text style={[styles.list]}>Stamina: +40</Text>
        <Text style={[styles.list]}>Health: +45</Text>
        <Text style={[styles.list]}>Dysentery Chance: 0%</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Can of Tuna</Text>
        <Text style={[styles.list]}>1 Corn Meal</Text>
        <Text style={[styles.list]}>2 Corn Bread</Text>
        <Text style={[styles.list]}>3 Animal Fat</Text>
        <Text style={[styles.list]}>1 Can of Peas</Text>

        <Text style={[styles.list]}>Needed:</Text>
        <Text style={[styles.list]}>Cooking Pot</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Home Cooking Weekly</Text>
      </ScrollView>
    );
  }

export default TunaFishGravyToastItem;


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