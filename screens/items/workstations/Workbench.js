{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";




function WorkbenchItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Workbench Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Workbench is an additional crafting queue for the player. Using ingredients held in the players Inventory, the workbench can craft items that the player can normally craft from their backpack as well as items that are only available on the Workbench. This enables a player to craft multiple items in parallel, when crafting with the workbench as well as from their backpack, as previously done.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>25 Forged Iron</Text>
        <Text style={[styles.list]}>20 Machanical Parts</Text>
        <Text style={[styles.list]}>5 Duct Tape</Text>
        <Text style={[styles.list]}>100 Nails</Text>
        <Text style={[styles.list]}>100 Wood</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Forge Ahead</Text>
      </ScrollView>
    );
  }

export default WorkbenchItem;