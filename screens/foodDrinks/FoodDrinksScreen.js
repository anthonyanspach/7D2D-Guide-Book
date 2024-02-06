{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function FoodDrinksScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Food Categories</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Food/Cooking is a major survival mechanic in 7 Days to Die. Consuming food/drink grants Fullness, which restores Max Stamina. Without periodic consumption of food/drink, hunger and thirst debilitate the player, slowing movement/action speed and eventually causing death. The player can consume both food and drinks over their respective bars but they are drained fast. The amount representing 20% of both bars are depleted at a slower pace, making the player able to utilize 120% of both food and hydration bar with good efficiency.</Text>
        
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('IngredientsScreen')} >

          <Text style={[styles.buttonText]}>Ingredients</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('CannedFoodsScreen')} >

          <Text style={[styles.buttonText]}>Canned Foods</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('CookedFoodsScreen')} >

          <Text style={[styles.buttonText]}>Cooked Foods</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.shirtsButton]} onPress={() => navigation.navigate('DrinksScreen')} >

          <Text style={[styles.buttonText]}>Drinks</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default FoodDrinksScreen;