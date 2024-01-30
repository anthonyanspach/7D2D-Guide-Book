{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function DrinksScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Drinks</Text>
        
        <Text style={[styles.text]}>Early Game</Text>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CoffeeItem')} >

          <Text style={[styles.buttonText]}>Coffee</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GoldenrodTeaItem')} >

          <Text style={[styles.buttonText]}>Goldenrod Tea</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MurkyWaterItem')} >

          <Text style={[styles.buttonText]}>Murky Water</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('RedTeaItem')} >

          <Text style={[styles.buttonText]}>Red Tea</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('WaterItem')} >

          <Text style={[styles.buttonText]}>Water</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('YuccaJuiceItem')} >

          <Text style={[styles.buttonText]}>Yucca Juice</Text>

        </TouchableOpacity>

        <Text style={[styles.text]}>Mid Game</Text>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BeerItem')} >

          <Text style={[styles.buttonText]}>Beer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('BlackstrapCoffeeItem')} >

          <Text style={[styles.buttonText]}>Blackstrap Coffee</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('MegaCrushItem')} >

          <Text style={[styles.buttonText]}>Mega Crush</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('PureMineralWaterItem')} >

          <Text style={[styles.buttonText]}>Pure Mineral Water</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('YuccaJuiceSmoothieItem')} >

          <Text style={[styles.buttonText]}>Yucca Juice Smoothie</Text>

        </TouchableOpacity>

        <Text style={[styles.text]}>Late Game</Text>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GrandpaAwesomeSauceItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Awesome Sauce</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GrandpaFergitElixirItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Fergit'n Elixir</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GrandpaLearnElixirItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Learn'n Elixir</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('GrandpaMoonshineItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Moonshine</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default DrinksScreen;


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