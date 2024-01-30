{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LockpickItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Lockpick info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>Lockpicks are consumable items that can be used to unlock locked containers. To do so, hover over a locked object and hold the "Activate" key. As of Alpha 21, the radial menu is no longer necessary to begin the process of lockpicking. A countdown timer will appear, with a random chance to abruptly stop and fail as the lockpick breaks. If the lockpick breaks, the timer will disappear and its progress will be reset to the previous quarter. Note that lockpicks aren't consumed upon a successful lockpicking. Lockpicks can not be used to unlock doors.</Text>

        <Text style={[styles.text]}>Obtaining:</Text>
        <Text style={[styles.text]}>Lockpicks may be found in containers containing Junk, such as Garbage Piles, Suitcases, and Sedans. They may also be found in Working Stiffs Crates.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Forged Iron</Text>
        <Text style={[styles.list]}>1 Machanical Part</Text>

        <Text style={[styles.list]}>Unlock Options:</Text>
        <Text style={[styles.list]}>Forge Ahead</Text>
      </ScrollView>
    );
  }

export default LockpickItem;


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