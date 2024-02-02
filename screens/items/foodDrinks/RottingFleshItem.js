{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RottingFleshItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Rotting Flech Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Rotting Flesh is an item obtained by harvesting the corpses of Zombie Dogs, Zombie Bears, and Zombie Vultures. It can also be found by harvesting carcasses and rotting corpses found on the ground throughout the world, and from body bags.</Text>

        <Text style={[styles.text]}>Consumption:</Text>
        <Text style={[styles.text]}>Consuming Rotting Flesh is always a bad idea, unless one absolutely must. It is generally perceived to be a terrible food source, harming the players health to eat and providing a pitiful amount of fullness. On top of that it, like other low tier foods, has a 12% chance to cause Dysentery.</Text>
      </ScrollView>
    );
  }

export default RottingFleshItem;


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