{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ForgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Forge Item</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>A Forge is used to smelt items into refined products that are more useful. This process requires time, fuel sources to operate, and scrapped or whole materials to smelt. A Forge allows survivors to craft advanced Tools, Building Materials, ammunition components, and other Resources.</Text>

        <Text style={[styles.text]}>Usage:</Text>
        <Text style={[styles.text]}>Fuel is placed in the cells below the tool cells. The Forge can be turned on either with the on/off button below the fuel or turned on by starting a new recipe. The Forge will not turn off automatically unless all the fuel is expended. No recipe will be available until there is fuel in the fuel cells. Fuels include all items with a burn time, including Coal (100 seconds), Wood (50 seconds), and Oil Shale (5 seconds), and Gas Can (2 seconds).</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>50 Cobblestone Rocks</Text>
        <Text style={[styles.list]}>1 Wood Log</Text>
        <Text style={[styles.list]}>10 Leather</Text>
        <Text style={[styles.list]}>3 Duct Tape</Text>
        <Text style={[styles.list]}>3 Short Iron Pipes</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Forged Ahead</Text>
      </ScrollView>
    );
  }

export default ForgeItem;


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