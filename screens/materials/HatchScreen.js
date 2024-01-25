{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HatchScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hatches</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronHatchItem')} >

          <Text style={[styles.buttonText]}>Iron Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronHatchv2Item')} >

          <Text style={[styles.buttonText]}>Iron Hatch v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronHatchv3Item')} >

          <Text style={[styles.buttonText]}>Iron Hatch v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelHatchItem')} >

          <Text style={[styles.buttonText]}>Steel Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelHatchPoweredItem')} >

          <Text style={[styles.buttonText]}>Steel Hatch Powered</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('VaultHatchv2Item')} >

          <Text style={[styles.buttonText]}>Vault Hatch v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('VaultHatchv3Item')} >

          <Text style={[styles.buttonText]}>Vault Hatch v3</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodenHatchItem')} >

          <Text style={[styles.buttonText]}>Wooden Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodenHatchv2Item')} >

          <Text style={[styles.buttonText]}>Wooden Hatch v2</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WoodenHatchv3Item')} >

          <Text style={[styles.buttonText]}>Wooden Hatch v3</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HatchScreen;
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
    height: '10%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});