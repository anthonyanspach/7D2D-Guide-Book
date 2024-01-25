{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function MaterialsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Materials Categories</Text>

        <Text style={[styles.text]}>Decription:</Text>
        <Text style={[styles.text]}>Building Materials includes all of the various materials used in player-constructed structures.</Text>
        
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WorkstationsScreen')} >

        <Text style={[styles.buttonText]}>Workstations</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WindowsScreen')} >

        <Text style={[styles.buttonText]}>Windows</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('TerrainScreen')} >

        <Text style={[styles.buttonText]}>Terrain</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('StairsScreen')} >

        <Text style={[styles.buttonText]}>Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SidingScreen')} >

        <Text style={[styles.buttonText]}>Siding</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LightingScreen')} >

        <Text style={[styles.buttonText]}>Lighting</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HatchScreen')} >

        <Text style={[styles.buttonText]}>Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('FurnitureScreen')} >

        <Text style={[styles.buttonText]}>Furniture</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('FramesScreen')} >

        <Text style={[styles.buttonText]}>Frames</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('FencingScreen')} >

        <Text style={[styles.buttonText]}>Fencing</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('DoorsScreen')} >

        <Text style={[styles.buttonText]}>Doors</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ContainersScreen')} >

        <Text style={[styles.buttonText]}>Containers</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BlockItemsScreen')} >

        <Text style={[styles.buttonText]}>Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('OtherScreen')} >

        <Text style={[styles.buttonText]}>Other</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MaterialsScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: 250,
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