{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodSpikesItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wood Spikes Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Wood Spikes are a trap used to defend structures by impaling zombies, humans, and animals. Wood Spikes are crafted using 20 Wood as shown below. They have 3 stages that each deal 33 damage and have 33 hit points, but anything that steps into the trap will break a stage regardless of how many hit points the trap has. Each stage looks more broken than the last, but has the same stats.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>20 Wood</Text>
      </ScrollView>
    );
  }

export default WoodSpikesItem;


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
    height: '14%',
    width: '80%',
  },
  buttonText: {
    color: 'red',
    fontSize: 25,
  },
});