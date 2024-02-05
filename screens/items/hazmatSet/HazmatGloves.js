{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function HazmatGlovesItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Hazmat Gloves info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Hazmat Gloves is an item of Clothing which can not be crafted by the player and worn by their character as Apparel, providing a small boost to Heat and Cold Resistance.</Text>

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

export default HazmatGlovesItem;