{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function IronHatchItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Iron Hatch</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Iron Hatch is a craft-able hatch that has the ability to be locked by the player. A Iron Hatch can be upgraded to a Vault Hatch.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>A Iron Hatch offers three security feature options, in relation to the player's control of the Hatch. Holding down the 'E' key, while looking at the Reinforced Secure Wooden Door, will bring up the following three icons:</Text>

        <Text style={[styles.text]}>A keypad icon and is used to set up a password for the Hatch, moving the cursor over the icon and releasing the E key will bring up the password input box. Using the password input box the player can type any password they like and set it by clicking the green set button, or press the red cancel button to exit the menu and cancel the password input. Once the player has set a password they will have to enter it into the Hatch to be able to open it, this only needs to be done the first time the player uses the Hatch. Any player that knows the door code will be able to open this Hatch.</Text>

        <Text style={[styles.text]}>A doorway icon, moving the cursor over this icon and releasing the E key with either open or close the Hatch depending on which state it was in when the player pushed down the E button.</Text>

        <Text style={[styles.text]}>A padlock icon and represents the Hatch lock, moving the cursor over the icon and releasing the E key will toggle the Hatch between being either locked or unlocked. A Hatch that is locked without a password can only be opened by the player that locked it.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>10 Forged Iron</Text>
      </ScrollView>
    );
  }

export default IronHatchItem;