{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function ScrapHelmetItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Scrap Helmet info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Scrap Helmet is an item of Clothing which can be crafted by the player and worn by their character as Armor to help protect them from physical damage.</Text>

        <Text style={[styles.textHeader]}>Quality and Durability:</Text>
        <Text style={[styles.text]}>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text style={[styles.textHeader]}>Cold and Heat Resistance:</Text>
        <Text style={[styles.text]}>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text style={[styles.textHeader]}>Modifier Slots:</Text>
        <Text style={[styles.text]}>Unknown</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>150 Iron</Text>
        <Text style={[styles.list]}>2 Leather</Text>
        <Text style={[styles.list]}>1 Duct Tape</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Armored Up</Text>
      </ScrollView>
    );
  }

export default ScrapHelmetItem;