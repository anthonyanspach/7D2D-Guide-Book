{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PaddedArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Padded Armor Set Items</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PaddedGlovesItem')} >

          <Text style={[styles.buttonText]}>Padded Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PaddedHoodItem')} >

          <Text style={[styles.buttonText]}>Padded Hood</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PaddedChestItem')} >

          <Text style={[styles.buttonText]}>Padded Chest Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PaddedLegItem')} >

          <Text style={[styles.buttonText]}>Padded Leg Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PaddedBootsItem')} >

          <Text style={[styles.buttonText]}>Padded Boots</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default PaddedArmorScreen;

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
    height: '15%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});