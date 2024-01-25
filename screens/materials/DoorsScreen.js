{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DoorsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Doors</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GarageDoorMetalItem')} >

          <Text style={[styles.buttonText]}>Garage Door Metal</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GarageDoorMetalv2Item')} >

          <Text style={[styles.buttonText]}>Garage Door Metal v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GarageDoorMetalv3Item')} >

          <Text style={[styles.buttonText]}>Garage Door Metal v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronDoorItem')} >

          <Text style={[styles.buttonText]}>Iron Door</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronDoorv2Item')} >

          <Text style={[styles.buttonText]}>Iron Door v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronDoorv3Item')} >

          <Text style={[styles.buttonText]}>Iron Door v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('JailDoorItem')} >

          <Text style={[styles.buttonText]}>Jail Door</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MetalReinforcedWoodenDoorItem')} >

          <Text style={[styles.buttonText]}>Metal Reinforced Wooden Door</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ReinforcedDrawbridgeItem')} >

          <Text style={[styles.buttonText]}>Reinforced Drawbridge</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ReinforcedDrawbridgePoweredItem')} >

          <Text style={[styles.buttonText]}>Reinforced Drawbridge Powered</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ReinforcedSecureWoodenDoorItem')} >

          <Text style={[styles.buttonText]}>Reinforced Secure Wooden Door</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('VaultDoorItem')} >

          <Text style={[styles.buttonText]}>Vault Door</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('VaultDoorv2Item')} >

          <Text style={[styles.buttonText]}>Vault Door v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('VaultDoorv3Item')} >

          <Text style={[styles.buttonText]}>Vault Door v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodDoorItem')} >

          <Text style={[styles.buttonText]}>Wood Door</Text>

        </TouchableOpacity>
        
      </ScrollView>
    );
  }

export default DoorsScreen;

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