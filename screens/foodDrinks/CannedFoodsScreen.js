{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../assets/styles/Styles";



function CannedFoodsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Canned Foods</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Even though most types of canned food can be used in a recipe later on, consuming them is a rather essential part of early game. Some canned food isn't used in recipes: these include Can of Cat Food, Can of Miso, Can of Pears, Chicken Soup and Chicken Ration.</Text>

        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanCatFoodItem')} >

          <Text style={[styles.buttonText]}>Can of Cat Food</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanChiliItem')} >

          <Text style={[styles.buttonText]}>Can of Chili</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanDogFoodItem')} >

          <Text style={[styles.buttonText]}>Can of Dog Food</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanMisoItem')} >

          <Text style={[styles.buttonText]}>Can of Miso</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanPastaItem')} >

          <Text style={[styles.buttonText]}>Can of Pasta</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanPearsItem')} >

            <Text style={[styles.buttonText]}>Can of Pears</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanPeasItem')} >

          <Text style={[styles.buttonText]}>Can of Peas</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanSalmonItem')} >

          <Text style={[styles.buttonText]}>Can of Salmon</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanShamItem')} >

          <Text style={[styles.buttonText]}>Can of Sham</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanStockItem')} >

          <Text style={[styles.buttonText]}>Can of Stock</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('CanTunaItem')} >

          <Text style={[styles.buttonText]}>Can of Tuna</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ChickenRationItem')} >

          <Text style={[styles.buttonText]}>Chicken Ration</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('ChickenSoupItem')} >

          <Text style={[styles.buttonText]}>Chicken Soup</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('LambRationItem')} >

          <Text style={[styles.buttonText]}>Lamb Ration</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.clothingButton]} onPress={() => navigation.navigate('LargeBeefRationItem')} >

          <Text style={[styles.buttonText]}>Large Beef Ration</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default CannedFoodsScreen;