{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function CookedFoodScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cooked Foods</Text>

        <Text style={[styles.textHeader]}>Early Game</Text>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('BoiledEggItem')} >

          <Text style={[styles.buttonText]}>Boiled Egg</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('BoiledMeatItem')} >

          <Text style={[styles.buttonText]}>Boiled Meat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('CharredMeatItem')} >

          <Text style={[styles.buttonText]}>Charred Meat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('CornBreadItem')} >

          <Text style={[styles.buttonText]}>Corn Bread</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('GrilledCornItem')} >

          <Text style={[styles.buttonText]}>Grilled Corn</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('GrilledMeatItem')} >

          <Text style={[styles.buttonText]}>Grilled Meat</Text>

        </TouchableOpacity>

        <Text style={[styles.textHeader]}>Mid Game</Text>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('BlueberryPieItem')} >

          <Text style={[styles.buttonText]}>Blueberry Pie</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('MeatStewItem')} >

          <Text style={[styles.buttonText]}>Meat Stew</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('PumpkinBreadItem')} >

          <Text style={[styles.buttonText]}>Pumpkin Bread</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('PumpkinCheeseCakeItem')} >

          <Text style={[styles.buttonText]}>Pumpkin Cheesecake</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('PumpkinPieItem')} >

          <Text style={[styles.buttonText]}>Pumpkin Pie</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('SteakPotatoMealItem')} >

          <Text style={[styles.buttonText]}>Steak and Potato Meal</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('VegetableStewItem')} >

          <Text style={[styles.buttonText]}>Vegetable Stew</Text>

        </TouchableOpacity>
        
        <Text style={[styles.textHeader]}>Late Game</Text>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('ChiliDogItem')} >

          <Text style={[styles.buttonText]}>Chili Dog</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('FishTacosItem')} >

          <Text style={[styles.buttonText]}>Fish Tacos</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('GumboStewItem')} >

          <Text style={[styles.buttonText]}>Gumbo Stew</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('HoboStewItem')} >

          <Text style={[styles.buttonText]}>Hobo Stew</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('ShamChowderItem')} >

          <Text style={[styles.buttonText]}>Sham Chowder</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('ShepardsPieItem')} >

          <Text style={[styles.buttonText]}>Shepards Pie</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('SpaghettiItem')} >

          <Text style={[styles.buttonText]}>Spaghetti</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.otherButton]} onPress={() => navigation.navigate('TunaFishGravyToastItem')} >

          <Text style={[styles.buttonText]}>Tuna Fish Gravy Toast</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default CookedFoodScreen;