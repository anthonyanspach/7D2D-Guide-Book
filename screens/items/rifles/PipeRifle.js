{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function PipeRifleItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Pipe Rifle Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Pipe Rifles were added to the game in Alpha 20. They are intended to be an early-game weapon, much like their precursor the Blunderbuss. The two core components used in crafting are pipes and glue.</Text>

        <Text style={[styles.text]}>Like all pipe weapons, it can be crafted right at the beginning of the game (assuming the player has all its crafting ingredients) requiring no workstations, books or skills. Headshotting adds 25 extra damage in A21.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>12 Short Iron Pipe</Text>
        <Text style={[styles.list]}>6 Glue</Text>
        <Text style={[styles.list]}>18 Wood</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Rifle World</Text>
      </ScrollView>
    );
  }

export default PipeRifleItem;


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