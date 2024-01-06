{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function SteelHatchItem({ navigation }) {
    return (
      <View>
        <Text>Steel Hatch Info</Text>

        <Text>Description:</Text>
        <Text>A Steel Hatch is a craftable hatch that has the ability to be locked by the player. It is crafted using Forged Steel, Springs, and Mechanical Parts.</Text>

        <Text>Usage:</Text>
        <Text>A Steel Hatch offers three security feature options, in relation to the player's control of the Hatch. Holding down the 'E' key, while looking at the Reinforced Secure Wooden Door, will bring up the following three icons:</Text>

        <Text>A keypad icon and is used to set up a password for the Hatch, moving the cursor over the icon and releasing the E key will bring up the password input box. Using the password input box the player can type any password they like and set it by clicking the green set button, or press the red cancel button to exit the menu and cancel the password input. Once the player has set a password they will have to enter it into the Hatch to be able to open it, this only needs to be done the first time the player uses the Hatch. Any player that knows the door code will be able to open this Hatch.</Text>

        <Text>A doorway icon, moving the cursor over this icon and releasing the E key with either open or close the Hatch depending on which state it was in when the player pushed down the E button.</Text>

        <Text>A padlock icon and represents the Hatch lock, moving the cursor over the icon and releasing the E key will toggle the Hatch between being either locked or unlocked. A Hatch that is locked without a password can only be opened by the player that locked it.</Text>

        <Text>Crafting:</Text>
        <Text>10 Forged Iron</Text>
        <Text>10 Springs</Text>
        <Text>10 Mechanical Parts</Text>
      </View>
    );
  }

export default SteelHatchItem;