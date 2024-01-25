{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function ClothingScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Clothing Categories</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HatsScreen')} >

          <Text style={[styles.buttonText]}>Hats</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GlassesScreen')} >

          <Text style={[styles.buttonText]}>Glasses</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('FaceScreen')} >

          <Text style={[styles.buttonText]}>Face</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('OvercoatsScreen')} >

          <Text style={[styles.buttonText]}>Overcoats</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ShirtsScreen')} >

          <Text style={[styles.buttonText]}>Shirts</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PantsScreen')} >

          <Text style={[styles.buttonText]}>Pants</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BootsScreen')} >

          <Text style={[styles.buttonText]}>Boots</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LightHelmetsArmorScreen')} >

          <Text style={[styles.buttonText]}>Light Armor Helmets</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HeavyHelmetsArmorScreen')} >

          <Text style={[styles.buttonText]}>Heavy Armor Helmets</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PlantFiberScreen')} >

          <Text style={[styles.buttonText]}>Plant Fiber Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PaddedArmorScreen')} >

          <Text style={[styles.buttonText]}>Padded Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LeatherArmorScreen')} >

          <Text style={[styles.buttonText]}>Leather Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MilitaryArmorScreen')} >

          <Text style={[styles.buttonText]}>Military Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ScrapArmorScreen')} >

          <Text style={[styles.buttonText]}>Scrap Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('IronArmorScreen')} >

          <Text style={[styles.buttonText]}>Iron Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('SteelArmorScreen')} >

          <Text style={[styles.buttonText]}>Steel Armor Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('HazmatSuitScreen')} >

          <Text style={[styles.buttonText]}>Hazmat Suit Set</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GhillieSuitScreen')} >

          <Text style={[styles.buttonText]}>Ghillie Suit Set</Text>

        </TouchableOpacity>

      </ScrollView>
    );
  }

export default ClothingScreen;

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