{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MetalReinforcedWoodBlockItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Metal Reinforced Wood Block Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Metal Reinforced Wood Blocks is the upgraded version of Reinforced Wood Blocks. Metal Reinforced Wood Blocks can be upgraded further into Iron Blocks. It can not be crafted using other materials, the only ways to obtain Metal Reinforced Wood Blocks are through upgrading Reinforced Wood Blocks or using the Creative Menu. It is not possible to use Metal Reinforced Wood Blocks as a source of Combustible fuel.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Reinforced Wood Block</Text>
        <Text style={[styles.list]}>12 Iron</Text>
      </ScrollView>
    );
  }

export default MetalReinforcedWoodBlockItem;


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