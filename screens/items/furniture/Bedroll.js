{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BedrollItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Bedroll Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Bedroll is an item that may be crafted using Plant Fibers as shown below or found around the map. A Bedroll makes a single spawn point at the location it was placed at; it will be your only spawn point.</Text>
        <Text style={[styles.text]}>After the placement, its location will be highlighted on the map, marked as an icon of a bed.</Text>
        <Text style={[styles.text]}>It is recommended to place a Secure Storage Chest with some basic loot nearby in case you die and lose all the items in your tool bar and backpack</Text>
        <Text style={[styles.text]}>Additionally, a placed Bedroll will block zombie spawns in a rectangular area of 31x31 meters from bedrock to sky.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Plant Fibers</Text>
      </ScrollView>
    );
  }

export default BedrollItem;


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