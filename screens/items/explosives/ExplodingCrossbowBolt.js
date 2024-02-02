{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function ExplodingCrossbowBoltItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Exploding Crossbow Bolt Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>An Exploding Crossbow Bolt is a type of Explosive Ammunition for the Crossbow obtained through crafting. It inflicts high damage to all entities within range of the point of impact. The point of impact may also take damage from the arrow itself. The explosion will also damage blocks. The Exploding Crossbow Bolt can be crafted by reading the Ranger's Guide to Archery Vol.2.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Steel Arrowhead</Text>
        <Text style={[styles.list]}>2 Scrap Polymers</Text>
        <Text style={[styles.list]}>8 Gun Powder</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Ranger's Guide to Archery Vol.2</Text>
      </ScrollView>
    );
  }

export default ExplodingCrossbowBoltItem;


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