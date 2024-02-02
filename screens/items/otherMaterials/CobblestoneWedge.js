{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function CobblestoneWedgeItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Cobblestone Wedge Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Cobblestone Wedge is a the upgraded version of a Rebar Ramp Frame and can also be upgraded further into a Reinforced Cobblestone Ramp. It can not be crafted using other materials, the only ways to obtain a Cobblestone Wedge are through upgrading a Rebar Ramp Frame or using the Creative Menu. It is not possible to dismantle, scrap or use a Cobblestone Wedge as fuel. You can not destroy a Cobblestone Wedge, as such because it will simply downgrade at what would be its point of destruction.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>None</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default CobblestoneWedgeItem;


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