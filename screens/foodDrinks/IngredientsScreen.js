{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IngredientsScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ingredients</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>While these food items can be eaten, it is usually better to use them in recipes to gain much more fullness and hydration. In addition to their low gains, some of them have also a chance of giving the player Dysentery.</Text>
        
        <TouchableOpacity style={[styles.button]} title="Animal Fat" onPress={() => navigation.navigate('AnimalFatItem')} >

          <Text style={[styles.buttonText]}>Animal Fat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Blueberries" onPress={() => navigation.navigate('BlueberriesItem')} >

          <Text style={[styles.buttonText]}>Blueberries</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Ear of Corn" onPress={() => navigation.navigate('EarofCornItem')} >

          <Text style={[styles.buttonText]}>Ear of Corn</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Ear of Super Corn" onPress={() => navigation.navigate('EarofSuperCornItem')} >

          <Text style={[styles.buttonText]}>Ear of Super Corn</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Egg" onPress={() => navigation.navigate('EggItem')} >

          <Text style={[styles.buttonText]}>Egg</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Mushrooms" onPress={() => navigation.navigate('MushroomsItem')} >

          <Text style={[styles.buttonText]}>Mushrooms</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Potato" onPress={() => navigation.navigate('PotatoItem')} >

          <Text style={[styles.buttonText]}>Potato</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Pumpkin" onPress={() => navigation.navigate('PumpkinItem')} >

          <Text style={[styles.buttonText]}>Pumpkin</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Raw Meat" onPress={() => navigation.navigate('RawMeatItem')} >

          <Text style={[styles.buttonText]}>Raw Meat</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Rotting Flesh" onPress={() => navigation.navigate('RottingFleshItem')} >

          <Text style={[styles.buttonText]}>Rotting Flesh</Text>

        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]} title="Yucca Fruit" onPress={() => navigation.navigate('YuccaFruitItem')} >

          <Text style={[styles.buttonText]}>Yucca Fruit</Text>

        </TouchableOpacity>
      </ScrollView>
    );
  }

export default IngredientsScreen;


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
    height: '7%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});