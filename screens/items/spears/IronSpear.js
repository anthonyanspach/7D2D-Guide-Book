{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronSpearItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Spear Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Iron Spear is a tier 2 Spear which can be used as a melee weapon. All Spears were changed in Alpha 21 to being melee only items and are no longer able to be thrown.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>48 Forged Iron</Text>
        <Text style={[styles.list]}>30 Wood</Text>
        <Text style={[styles.list]}>6 Leather</Text>
        <Text style={[styles.list]}>6 Duct Tape</Text>
      </ScrollView>
    );
  }

export default IronSpearItem;


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