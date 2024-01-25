{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function RepairingItemScreen({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Repairing Mechanics</Text>

        <Text style={[styles.text]}>Repairing Items:</Text>
        <Text style={[styles.text]}>Most tools, weapons, and armor have a Durability which degrades over time with use.</Text>

        <Text style={[styles.text]}>Tools, weapons, and armor all function normally until they reach zero durability, at which point tools and weapons become unusable until repair, and armor stops providing protection until repaired. Repairing will restore the tool, weapon, or armor back to Max Durability.</Text>


        <Text style={[styles.text]}>Repairing Blocks:</Text>
        <Text style={[styles.text]}>Any construction tool can be used to repair blocks.</Text>

        <Text style={[styles.text]}>To repair a block, the player must have the appropriate resource to repair it. This is usually one of the resources used to create the block. This is not always the case, for example Brick Blocks need Cobblestone Rocks for repairs. Using the right mouse button will repair the block.</Text>

        <Text style={[styles.text]}>It is very easy to see if a block requires a repair. Some blocks will have a visually altered appearance when they are damaged. Alternately, with a tool equipped and the crosshairs centered on the block, the health bar of the block will show. The health bar of the block will display as Current Durability / Max Durability for the block. The health bar of the block only shows when the block is damaged.</Text>
      </ScrollView>
    );
  }

export default RepairingItemScreen;

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