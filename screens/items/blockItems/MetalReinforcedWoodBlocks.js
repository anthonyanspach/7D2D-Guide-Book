{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function MetalReinforcedWoodBlockItem({ navigation }) {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Metal Reinforced Wood Block Info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>Metal Reinforced Wood Blocks is the upgraded version of Reinforced Wood Blocks. Metal Reinforced Wood Blocks can be upgraded further into Iron Blocks. It can not be crafted using other materials, the only ways to obtain Metal Reinforced Wood Blocks are through upgrading Reinforced Wood Blocks or using the Creative Menu. It is not possible to use Metal Reinforced Wood Blocks as a source of Combustible fuel.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>1 Reinforced Wood Block</Text>
        <Text style={[styles.list]}>12 Iron</Text>
      </ScrollView>
    );
  }

export default MetalReinforcedWoodBlockItem;