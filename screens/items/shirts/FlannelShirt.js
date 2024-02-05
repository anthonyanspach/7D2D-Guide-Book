{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";


function FlannelShirtItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Flannel Shirt info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>The Flannel Shirt is an item of Clothing which can be worn by a character as Apparel, providing a boost to Heat and Cold Resistance.</Text>

        <Text style={[styles.textHeader]}>Quality and Durability:</Text>
        <Text style={[styles.text]}>Apparel items do not have a Quality or Durability stat. They do not take damage and never need to be repaired.</Text>

        <Text style={[styles.textHeader]}>Cold and Heat Resistance:</Text>
        <Text style={[styles.text]}>Apparel items generally have both a Cold Resist and Heat Resist stat. These are determined randomly within a given range for the item type.</Text>

        <Text style={[styles.textHeader]}>Modifier Slots:</Text>
        <Text style={[styles.text]}>The Flannel Shirt has one Cosmetic Slot for dyes and one Modifier Slot.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>50 Cloth Fragments</Text>
        <Text style={[styles.list]}>1 Sewing Kit</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Needle & Thread Vol.1</Text>
      </ScrollView>
    );
  }

export default FlannelShirtItem;