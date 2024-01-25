{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function MilitaryArmorScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Military Armor Set Items</Text>

        <TouchableOpacity style={[styles.button]} title="Military Boots" onPress={() => navigation.navigate('MilitaryBootsItem')} >

          <Text style={[styles.buttonText]}>Military Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Military Stealth Boots" onPress={() => navigation.navigate('MilitaryStealthBootsItem')} >

          <Text style={[styles.buttonText]}>Military Stealth Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Military Gloves" onPress={() => navigation.navigate('MilitaryGlovesItem')} >

          <Text style={[styles.buttonText]}>Military Gloves</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Military Helmet" onPress={() => navigation.navigate('MilitaryHelmetItem')} >

          <Text style={[styles.buttonText]}>Military Helmet</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Military Leg Armor" onPress={() => navigation.navigate('MilitaryLegItem')} >

          <Text style={[styles.buttonText]}>Military Leg Armor</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Military Vest" onPress={() => navigation.navigate('MilitaryVestItem')} >

          <Text style={[styles.buttonText]}>Military Vest</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Mining Helmet" onPress={() => navigation.navigate('MiningHelmetItem')} >

          <Text style={[styles.buttonText]}>Mining Helmet</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MilitaryArmorScreen;

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