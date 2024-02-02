{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CementMixerItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cement Mixer Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>A Cement Mixer is a multi-use tool that can mix not only materials for the production of Concrete Mix, but also Sand, Crushed Sand, Gravel, and Stones.</Text>

        <Text style={[styles.text]}>Usage:</Text>
        <Text style={[styles.text]}>Once placed, the Cement Mixer is ready for use. It needs no fuel source and has no input slots. However, it does have a queue, which allows one to craft multiple different items in a series.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>25 Forged Iron</Text>
        <Text style={[styles.list]}>4 Springs</Text>
        <Text style={[styles.list]}>1 Engine</Text>
        <Text style={[styles.list]}>10 Machanical Parts</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Forged Ahead</Text>
      </ScrollView>
    );
  }

export default CementMixerItem;

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