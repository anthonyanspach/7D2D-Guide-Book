{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CannedFoodsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Canned Foods</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Even though most types of canned food can be used in a recipe later on, consuming them is a rather essential part of early game. Some canned food isn't used in recipes: these include Can of Cat Food, Can of Miso, Can of Pears, Chicken Soup and Chicken Ration.</Text>

        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanCatFoodItem')} >

          <Text style={[styles.buttonText]}>Can of Cat Food</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanChiliItem')} >

          <Text style={[styles.buttonText]}>Can of Chili</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanDogFoodItem')} >

          <Text style={[styles.buttonText]}>Can of Dog Food</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanMisoItem')} >

          <Text style={[styles.buttonText]}>Can of Miso</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanPastaItem')} >

          <Text style={[styles.buttonText]}>Can of Pasta</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanPearsItem')} >

            <Text style={[styles.buttonText]}>Can of Pears</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanPeasItem')} >

          <Text style={[styles.buttonText]}>Can of Peas</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanSalmonItem')} >

          <Text style={[styles.buttonText]}>Can of Salmon</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanShamItem')} >

          <Text style={[styles.buttonText]}>Can of Sham</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanStockItem')} >

          <Text style={[styles.buttonText]}>Can of Stock</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('CanTunaItem')} >

          <Text style={[styles.buttonText]}>Can of Tuna</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ChickenRationItem')} >

          <Text style={[styles.buttonText]}>Chicken Ration</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('ChickenSoupItem')} >

          <Text style={[styles.buttonText]}>Chicken Soup</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LambRationItem')} >

          <Text style={[styles.buttonText]}>Lamb Ration</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} onPress={() => navigation.navigate('LargeBeefRationItem')} >

          <Text style={[styles.buttonText]}>Large Beef Ration</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default CannedFoodsScreen;


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