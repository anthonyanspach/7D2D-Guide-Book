{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function WoodDoorItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Wood Door Info</Text>

        <Text style={[styles.text]}>Description:</Text>
        <Text style={[styles.text]}>A Wood Door is a craft-able Door that has the ability to be locked by the player. It is crafted using Wood. A Wood Door can be upgraded to an Iron Door (which can be further upgraded to a Steel Door). The door will slowly break down as it takes damage. There are 5 total stages of damage with the last one being completely destroyed with just the frame left standing (which can be repaired without needing to craft a new door). The last 2 stages before that, a hole will appear in the door which can be used to attack through the door. But watch out, Zombies can use that hole too!</Text>

        <Text style={[styles.text]}>Usage:</Text>
        <Text style={[styles.text]}>A Wood Door offers three security feature options, in relation to the player's control of the Hatch. Holding down the 'E' key, while looking at the Reinforced Secure Wooden Door, will bring up the following three icons:</Text>

        <Text style={[styles.text]}>A keypad icon and is used to set up a password for the Hatch, moving the cursor over the icon and releasing the E key will bring up the password input box. Using the password input box the player can type any password they like and set it by clicking the green set button, or press the red cancel button to exit the menu and cancel the password input. Once the player has set a password they will have to enter it into the Hatch to be able to open it, this only needs to be done the first time the player uses the Hatch. Any player that knows the door code will be able to open this Hatch.</Text>

        <Text style={[styles.text]}>A doorway icon, moving the cursor over this icon and releasing the E key with either open or close the Hatch depending on which state it was in when the player pushed down the E button.</Text>

        <Text style={[styles.text]}>A padlock icon and represents the Hatch lock, moving the cursor over the icon and releasing the E key will toggle the Hatch between being either locked or unlocked. A Hatch that is locked without a password can only be opened by the player that locked it.</Text>

        <Text style={[styles.list]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Wood</Text>
      </ScrollView>
    );
  }

export default WoodDoorItem;


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