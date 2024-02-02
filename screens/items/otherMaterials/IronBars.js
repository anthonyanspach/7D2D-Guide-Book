{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function IronBarsItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Bars Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Iron Bars is a strong block in 7 Days to Die. It's great for windows or cages as you can shoot through them. Caution should be exercised as projectile attacks from Infected Police Officer will allow their puke attacks to pass through the Iron Bars injuring your character. It can be placed at many different angles which makes it versatile in building as well. It is best destroyed with an Auger or Pickaxe.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>100 Iron</Text>
        <Text style={[styles.texlistt]}>20 Clay Soil</Text>
      </ScrollView>
    );
  }

export default IronBarsItem;


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