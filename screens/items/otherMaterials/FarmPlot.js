{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function FarmPlotItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Farm Plot Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Farm Plot is used to grow crops to create a renewable source of Food. Farm Plots cannot be picked up with the "E" key, but can be recovered after being placed. Upon destruction with any tool, or even an empty hand, the entire Farm Plot block will be added back into your inventory. This has a 100% success rate and no player-placed Farm Plot are lost when harvesting them in this manner. Unfortunately any seeds planted on the removed Farm Plot will be destroyed and lost forever.</Text>

        <Text style={[styles.text]}>Farm Plots are generated as parts of certain Points of Interest and work exactly like player-placed Farm Plots for farming. The one difference in PoI Farm Plots is they yield 22 Clay Soil and 4 Nitrate Powder when destroyed instead of the Farm Plot block. POI Farm Plots are often placed as parts of indoor planters or gardens.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>4 Wood</Text>
        <Text style={[styles.list]}>5 Rotting Flesh</Text>
        <Text style={[styles.list]}>12 Nitrate Powder</Text>
        <Text style={[styles.list]}>50 Clay Soil</Text>
      </ScrollView>
    );
  }

export default FarmPlotItem;


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