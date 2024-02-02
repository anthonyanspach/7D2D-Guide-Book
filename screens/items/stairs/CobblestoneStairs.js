{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CobblestoneStairsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cobblestone Stairs Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Cobblestone Stairs are a craftable building material that are easy to craft. Due to their reasonable strength they will take a while to be destroyed by Zombies. Cobblestone Stairs cannot be dismantled, melted, scrapped or used as a source of Combustible Fuel.</Text>

        <Text style={[styles.text]}>Cobblestone Stairs can be upgraded in place from Cobblestone Frame Stairs.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        
        <Text style={[styles.list]}>1 Cobblestone Frame Stairs</Text>
        <Text style={[styles.list]}>10 Cobblestone Rocks</Text>
      </ScrollView>
    );
  }

export default CobblestoneStairsItem;


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