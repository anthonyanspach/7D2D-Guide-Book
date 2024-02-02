{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CobblestoneBlocksItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cobblestone Blocks Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Cobblestone Blocks are a craftable building material that is reasonably durable. They are the next step above Wood Blocks and can be upgraded into Concrete Blocks. Cobblestone is a very effective early-mid game building material as its ingredients are relatively abundant and it has high amount of durability in comparison to wood.</Text>

        <Text style={[styles.text]}>Crafting a large amount of Cobblestone Blocks takes a while due to needing to craft Cobblestone Rocks first. However, Pallets covered in a blue tarp yield Cobblestone Rocks and can be harvested quickly with a shovel. Keep an eye out for those pallets in Points of Interest, especially around construction sites and garages.</Text>

        <Text style={[styles.text]}>To place the many varieties of Cobblestone Blocks available you must craft Cobblestone Shapes. The default shape is a solid cube. To change the shape that is being placed put the Cobblestone Shapes in your hotbar, select them so you are holding them in your hand, hold R, and then select the shapes menu. This will bring up the Shapes interface for selecting which block will be placed. There are a huge number of different shaped blocks available. Some examples include: the standard cube, ramps, stairs, posts, and partial blocks.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Cobblestone Rocks</Text>
      </ScrollView>
    );
  }

export default CobblestoneBlocksItem;


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