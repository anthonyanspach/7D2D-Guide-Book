{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ShirtsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Shirts Categories</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BDUTopItem')} >

          <Text style={[styles.buttonText]}>BDU Top</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HazmatShirtItem')} >

          <Text style={[styles.buttonText]}>Hazmat Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HoodedSweatshirtItem')} >

          <Text style={[styles.buttonText]}>Hooded Sweatshirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('FlannelShirtItem')} >

          <Text style={[styles.buttonText]}>Flannel Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PlantFiberShirtItem')} >

          <Text style={[styles.buttonText]}>Plant Fiber Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ShirtItem')} >

          <Text style={[styles.buttonText]}>Shirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SweatshirtItem')} >

          <Text style={[styles.buttonText]}>Sweatshirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('TankTopItem')} >

          <Text style={[styles.buttonText]}>Tank Top</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('TShirtItem')} >

          <Text style={[styles.buttonText]}>T Shirt</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default ShirtsScreen;

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