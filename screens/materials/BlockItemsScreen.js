{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function BlockItemsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Block Items</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('AwningRedBlocksItem')} >

          <Text style={[styles.buttonText]}>Awning Red Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BrickBlocksItem')} >

          <Text style={[styles.buttonText]}>Brick Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ClayRoofBlocksItem')} >

          <Text style={[styles.buttonText]}>Clay Roof Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CobblestoneBlocksItem')} >

          <Text style={[styles.buttonText]}>Cobblestone Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ConcreteBlocksItem')} >

          <Text style={[styles.buttonText]}>Concrete Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ConcreteFormBlocksItem')} >

          <Text style={[styles.buttonText]}>Concrete Form Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LandClaimBlocksItem')} >

          <Text style={[styles.buttonText]}>Land Claim Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MetalReinforcedWoodBlocksItem')} >

          <Text style={[styles.buttonText]}>Metal Reinforced Wood Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MetalTrussingItem')} >

          <Text style={[styles.buttonText]}>Metal Trussing</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PouredReinforcedConcreteBlocksItem')} >

          <Text style={[styles.buttonText]}>Poured Reinforced Concrete Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ReinforcedIronBlocksItem')} >

          <Text style={[styles.buttonText]}>Reinforced Iron Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StainlessSteelBlocksItem')} >

          <Text style={[styles.buttonText]}>Stainless Steel Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelBlocksItem')} >

          <Text style={[styles.buttonText]}>Steel Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodBlocksItem')} >

          <Text style={[styles.buttonText]}>Wood Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodenShinglesBlocksItem')} >

          <Text style={[styles.buttonText]}>Wooden Shingles Block</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HayBaleItem')} >

          <Text style={[styles.buttonText]}>Hay Bale</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default BlockItemsScreen;

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
    height: '5%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});