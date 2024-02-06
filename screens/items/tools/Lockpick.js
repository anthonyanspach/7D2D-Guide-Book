{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function LockpickItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Lockpick info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Lockpicks are consumable items that can be used to unlock locked containers. To do so, hover over a locked object and hold the "Activate" key. As of Alpha 21, the radial menu is no longer necessary to begin the process of lockpicking. A countdown timer will appear, with a random chance to abruptly stop and fail as the lockpick breaks. If the lockpick breaks, the timer will disappear and its progress will be reset to the previous quarter. Note that lockpicks aren't consumed upon a successful lockpicking. Lockpicks can not be used to unlock doors.</Text>

        <Text style={[styles.textHeader]}>Obtaining:</Text>
        <Text style={[styles.text]}>Lockpicks may be found in containers containing Junk, such as Garbage Piles, Suitcases, and Sedans. They may also be found in Working Stiffs Crates.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Forged Iron</Text>
        <Text style={[styles.list]}>1 Machanical Part</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Forge Ahead</Text>
      </ScrollView>
    );
  }

export default LockpickItem;