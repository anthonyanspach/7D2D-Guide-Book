{/*   */}
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styles } from "../../../assets/styles/Styles";



function BoneKnifeItem() {
    return (
      <ScrollView style={[styles.scrollContainer]} contentContainerStyle={[styles.contentContainerStyle]}>
        <Text style={[styles.screenHeader]}>Bone Knife info</Text>

        <Text style={[styles.textHeader]}>Description:</Text>
        <Text style={[styles.text]}>A Bone Knife is a improvised Bladed Melee weapon which is easy to craft with Bones. Made by simply filing down one of the joints into a sharp blade. It is one of the few tools available which can harvest useful things like Leather, Bones, Animal Fat, and Raw Meat from dead or undead animals. -Sneaking attack increases 400% extra damage in A21.-</Text>

        <Text style={[styles.textHeader]}>Uses:</Text>
        <Text style={[styles.text]}>During combat, the Bone Knife is a short range, one-handed melee weapon. Using the primary click (default left mouse button) will swing the Bone Knife, initiating its basic melee attack. Using the secondary click (default right mouse button) will initiate its power attack, doing more damage to its target.</Text>
        <Text style={[styles.text]}>When harvesting a recently slain animal corpse, or bones, the Bone Knife acts as a Butcher Tool, allowing you to obtain resources from the corpse that you would not get when using a tool that is not a designated Butcher Tool.</Text>

        <Text style={[styles.listHeader]}>Crafting:</Text>
        <Text style={[styles.list]}>5 Bones</Text>

        <Text style={[styles.unlockListHeader]}>Unlock Options:</Text>
        <Text style={[styles.unlockList]}>Knife Guy</Text>
      </ScrollView>
    );
  }

export default BoneKnifeItem;