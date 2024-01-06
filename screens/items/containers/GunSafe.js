{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



function GunSafeItem({ navigation }) {
    return (
      <ScrollView>
        <Text>Gun Safe Info</Text>

        <Text>Description:</Text>
        <Text>A Gun Safe is a type of secure storage that just like a Desk Safe or a Wall Safe can be locked and unlocked by the player. They can often be found in the attics of houses in towns or on the ground floor inside buildings, usually secured behind Iron Bars and they can contain some very useful items and weapons. Crafting a Gun Safe is easy but due to the crafting recipe requiring multiple steel ingots it is very expensive on resources. A destroyed Gun Safe will not drop anything and the contents will be lost. A Gun Safe cannot be dismantled, scrapped, melted in a forge or used as source of combustible fuel.</Text>

        <Text>When found in the wild, a Gun Safe must receive 5000 points of damage before the lock "layer" is broken and it becomes accessible. Effective tools are Pickaxes and TNT. When crafted by the player, they can be locked and unlocked as described below. Lockpicks can also be used to open them, less tediously, but it has a random luck element.</Text>

        <Text>Gun Safes crafted by the player do not contain loot. As of Alpha 21, Gun Safes crafted by the player can be different colors by using the Shape Menu.</Text>


        <Text>Usage:</Text>
        <Text>A Gun Sage offers three security feature options, in relation to the player's control of the Hatch. Holding down the 'E' key, while looking at the Reinforced Secure Wooden Door, will bring up the following three icons:</Text>

        <Text>A keypad icon and is used to set up a password for the Hatch, moving the cursor over the icon and releasing the E key will bring up the password input box. Using the password input box the player can type any password they like and set it by clicking the green set button, or press the red cancel button to exit the menu and cancel the password input. Once the player has set a password they will have to enter it into the Hatch to be able to open it, this only needs to be done the first time the player uses the Hatch. Any player that knows the door code will be able to open this Hatch.</Text>

        <Text>A doorway icon, moving the cursor over this icon and releasing the E key with either open or close the Hatch depending on which state it was in when the player pushed down the E button.</Text>

        <Text>A padlock icon and represents the Hatch lock, moving the cursor over the icon and releasing the E key will toggle the Hatch between being either locked or unlocked. A Hatch that is locked without a password can only be opened by the player that locked it.</Text>

        <Text>Crafting:</Text>
        <Text>40 Forged Steel</Text>
        <Text>5 Springs</Text>
        <Text>5 Mechanical Parts</Text>
      </ScrollView>
    );
  }

export default GunSafeItem;