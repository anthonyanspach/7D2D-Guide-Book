{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ShotgunsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Shotguns</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Shotguns are covered under the perk Boomstick. They offer the player a good source of damage in close-quarter combat. However, shotguns' power falls off quite fast when the range between the player and the target increases.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PipeShotgunItem')} >

          <Text style={[styles.buttonText]}>Pipe Shotgun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('DoubleBarrelShotgunItem')} >

          <Text style={[styles.buttonText]}>Double Barrel Shotgun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PumpShotgunItem')} >

          <Text style={[styles.buttonText]}>Pump Shotgun</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('AutoShotgunItem')} >

          <Text style={[styles.buttonText]}>Auto Shotgun</Text>

      </TouchableOpacity>
    </ScrollView>
    );
  }

export default ShotgunsScreen;


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
    height: '14%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});