{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function DrinksScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Drinks</Text>
        
        <Text style={[styles.textHeader]}>Early Game</Text>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CoffeeItem')} >

          <Text style={[styles.buttonText]}>Coffee</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('GoldenrodTeaItem')} >

          <Text style={[styles.buttonText]}>Goldenrod Tea</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('MurkyWaterItem')} >

          <Text style={[styles.buttonText]}>Murky Water</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('RedTeaItem')} >

          <Text style={[styles.buttonText]}>Red Tea</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('WaterItem')} >

          <Text style={[styles.buttonText]}>Water</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('YuccaJuiceItem')} >

          <Text style={[styles.buttonText]}>Yucca Juice</Text>

        </TouchableOpacity>

        <Text style={[styles.textHeader]}>Mid Game</Text>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('BeerItem')} >

          <Text style={[styles.buttonText]}>Beer</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('BlackstrapCoffeeItem')} >

          <Text style={[styles.buttonText]}>Blackstrap Coffee</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('MegaCrushItem')} >

          <Text style={[styles.buttonText]}>Mega Crush</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('PureMineralWaterItem')} >

          <Text style={[styles.buttonText]}>Pure Mineral Water</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('YuccaJuiceSmoothieItem')} >

          <Text style={[styles.buttonText]}>Yucca Juice Smoothie</Text>

        </TouchableOpacity>

        <Text style={[styles.textHeader]}>Late Game</Text>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('GrandpaAwesomeSauceItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Awesome Sauce</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('GrandpaFergitElixirItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Fergit'n Elixir</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('GrandpaLearnElixirItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Learn'n Elixir</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('GrandpaMoonshineItem')} >

          <Text style={[styles.buttonText]}>Grandpa's Moonshine</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default DrinksScreen;