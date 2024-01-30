{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BowsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Bows</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Bows and crossbows are covered under the perk Archery. They offer a quiet and efficient way to deal with zombies and other enemies. They need to reload after every shot and have a slow attack speed, which is counterbalanced by having an innate boost to stealth damage.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PrimitiveBowItem')} >

          <Text style={[styles.buttonText]}>Primitive Bow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodenBowItem')} >

          <Text style={[styles.buttonText]}>Wooden Bow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronCrossbowItem')} >

          <Text style={[styles.buttonText]}>Iron Crossbow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CompoundBowItem')} >

          <Text style={[styles.buttonText]}>Compound Bow</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CompoundCrossbowItem')} >

          <Text style={[styles.buttonText]}>Compound Crossbow</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BowsScreen;


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
    height: '11%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});