{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function SkiGogglesItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Ski Goggles info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>"Ski Goggles pimp your look and boost your Agility." Ski Goggles are a type of Clothing that doesn't provide the player protection. Ski Goggles do, however, provide the player with one attribute point in Agility.</Text>

        <Text style={[styles.textHeader]}>Quality and Durability:</Text>
        <Text style={[styles.text]}>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text style={[styles.textHeader]}>Cold and Heat Resistance:</Text>
        <Text style={[styles.text]}>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text style={[styles.textHeader]}>Modifier Slots:</Text>
        <Text style={[styles.text]}>Unknown</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>Uncraftable</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None/Only Found</Text>
      </ScrollView>
    );
  }

export default SkiGogglesItem;