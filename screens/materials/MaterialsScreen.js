{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function MaterialsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Materials Categories</Text>

        <Text style={[styles.textHeader]}>Decription:</Text>
        <Text style={[styles.text]}>Building Materials includes all of the various materials used in player-constructed structures.</Text>
        
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('WorkstationsScreen')} >

        <Text style={[styles.buttonText]}>Workstations</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('WindowsScreen')} >

        <Text style={[styles.buttonText]}>Windows</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('TerrainScreen')} >

        <Text style={[styles.buttonText]}>Terrain</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('StairsScreen')} >

        <Text style={[styles.buttonText]}>Stairs</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('SidingScreen')} >

        <Text style={[styles.buttonText]}>Siding</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('LightingScreen')} >

        <Text style={[styles.buttonText]}>Lighting</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('HatchScreen')} >

        <Text style={[styles.buttonText]}>Hatch</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('FurnitureScreen')} >

        <Text style={[styles.buttonText]}>Furniture</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('FramesScreen')} >

        <Text style={[styles.buttonText]}>Frames</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('FencingScreen')} >

        <Text style={[styles.buttonText]}>Fencing</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('DoorsScreen')} >

        <Text style={[styles.buttonText]}>Doors</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ContainersScreen')} >

        <Text style={[styles.buttonText]}>Containers</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('BlockItemsScreen')} >

        <Text style={[styles.buttonText]}>Blocks</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('OtherScreen')} >

        <Text style={[styles.buttonText]}>Other</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default MaterialsScreen;