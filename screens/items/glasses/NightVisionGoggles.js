{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function NightVisionGogglesItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Night Vision Goggles info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Night Vision Goggles are a high-tech pair of goggles that allow the wearer to see in very dark conditions. They can only be obtained by looting them, or occasionally appearing at the trader. However, they are most commonly found on zombies wearing military-grade armor. They are also found in tree stumps in the snow biome.</Text>

        <Text style={[styles.textHeader]}>Quality and Durability:</Text>
        <Text style={[styles.text]}>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text style={[styles.textHeader]}>Cold and Heat Resistance:</Text>
        <Text style={[styles.text]}>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text style={[styles.textHeader]}>Usage:</Text>
        <Text style={[styles.text]}>To equip Night Vision Goggles use these directions:</Text>
        <Text style={[styles.text]}>Open the Character Menu (B)</Text>
        <Text style={[styles.text]}>Place the Night Vision Goggles into the glasses gear slot</Text>
        <Text style={[styles.text]}>Press the same key used to turn on a flashlight (F)</Text>
        <Text style={[styles.text]}>Equipping the Goggles will unequip full-faced helmets, and vice versa</Text>

        <Text style={[styles.textHeader]}>Modifier Slots:</Text>
        <Text style={[styles.text]}>Unknown</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>Uncraftable</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>None / Only Found</Text>
      </ScrollView>
    );
  }

export default NightVisionGogglesItem;