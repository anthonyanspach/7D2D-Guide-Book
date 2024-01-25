{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function OvercoatsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Overcoats Categories</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LeatherPonchoItem')} >

          <Text style={[styles.buttonText]}>Leather Poncho</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CollegeJacketItem')} >

          <Text style={[styles.buttonText]}>College Jacket</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('JacketItem')} >

          <Text style={[styles.buttonText]}>Jacket</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LeatherDusterItem')} >

          <Text style={[styles.buttonText]}>LeatherDuster</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PufferCoatItem')} >

          <Text style={[styles.buttonText]}>Puffer Coat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SuitJacketItem')} >

          <Text style={[styles.buttonText]}>Suit Jacket</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default OvercoatsScreen;

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
    height: '15%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});