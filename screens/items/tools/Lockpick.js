{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function LockpickItem() {
    return (
      <View>
        <Text>Lockpick info</Text>

        <Text>Description:</Text>
        <Text>Lockpicks are consumable items that can be used to unlock locked containers. To do so, hover over a locked object and hold the "Activate" key. As of Alpha 21, the radial menu is no longer necessary to begin the process of lockpicking. A countdown timer will appear, with a random chance to abruptly stop and fail as the lockpick breaks. If the lockpick breaks, the timer will disappear and its progress will be reset to the previous quarter. Note that lockpicks aren't consumed upon a successful lockpicking. Lockpicks can not be used to unlock doors.</Text>

        <Text>Obtaining:</Text>
        <Text>Lockpicks may be found in containers containing Junk, such as Garbage Piles, Suitcases, and Sedans. They may also be found in Working Stiffs Crates.</Text>

        <Text>Crafting:</Text>
        <Text>1 Forged Iron</Text>
        <Text>1 Machanical Part</Text>

        <Text>Unlock Options:</Text>
        <Text>Forge Ahead</Text>
      </View>
    );
  }

export default LockpickItem;