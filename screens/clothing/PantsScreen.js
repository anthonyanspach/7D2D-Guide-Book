{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function PantsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pants Categories</Text>

        <TouchableOpacity style={[styles.button]} title="BDU Bottoms" onPress={() => navigation.navigate('BDUBottomsItem')} >

          <Text style={[styles.buttonText]}>BDU Bottoms</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Denim Pants" onPress={() => navigation.navigate('DenimPantsItem')} >

          <Text style={[styles.buttonText]}>Denim Pants</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Shorts" onPress={() => navigation.navigate('ShortsItem')} >

          <Text style={[styles.buttonText]}>Shorts</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Overalls" onPress={() => navigation.navigate('OverallsItem')} >

          <Text style={[styles.buttonText]}>Overalls</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Skirt" onPress={() => navigation.navigate('SkirtItem')} >

          <Text style={[styles.buttonText]}>Skirt</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Suit Pants" onPress={() => navigation.navigate('SuitPantsItem')} >

          <Text style={[styles.buttonText]}>Suit Pants</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default PantsScreen;

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