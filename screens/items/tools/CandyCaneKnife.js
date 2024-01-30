{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function CandyCaneKnifeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Candy Cane Knife info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>The Candy Cane Knife is a bladed melee weapon that is also quite useful as a butchering tool. The Candy Cane Knife cannot be crafted and is a seasonal item only being available during the month of December in the actual calendar year. You can find these knives when looting during the month of December.</Text>

        <Text style={[styles.text]}>Uses:</Text>
        <Text style={[styles.text]}>When used in combat, a Candy Cane Knife is an effective, short range Melee weapon.</Text>
        <Text style={[styles.text]}>Butchering. Clicking the left mouse button will use the Candy Cane Knife, hitting any item or block that is targeted by the crosshairs and within range. This will allow you to butcher killed animals, harvesting Resources with each use. The Candy Cane Knife is an effective tool for butchering dead animals.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default CandyCaneKnifeItem;

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