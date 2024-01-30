{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function HandgunsSMGScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Handguns and SMGs</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Handguns and the SMG are covered under the perk Gunslinger. Pistols offer a decent attack speed and magazine size with quite high damage. The SMG does the same but automatically.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PipePistolItem')} >

          <Text style={[styles.buttonText]}>Pipe Pistol</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PistolItem')} >

          <Text style={[styles.buttonText]}>Pistol</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('A44MagnumItem')} >

          <Text style={[styles.buttonText]}>.44 Magnum</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('A44DesertVultureItem')} >

          <Text style={[styles.buttonText]}>.44 Desert Vulture</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SMGItem')} >

          <Text style={[styles.buttonText]}>SMG-5</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default HandgunsSMGScreen;


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
    height: '13%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});